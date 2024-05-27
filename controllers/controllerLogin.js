const jwt = require('jsonwebtoken');
const pool = require('../db.js');
require('dotenv').config();

const controllerLogin = async (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = $1';

    try {
        if (!username || !password) {
            return res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios' });
        }

        const { rows } = await pool.query(query, [username]);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }

        const user = rows[0];
        const validPassword = (password === user.password);

        if (!validPassword) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY_LOGIN, { expiresIn: '1h' });

        res.status(200).json({ message: 'Autenticação bem-sucedida', token });
    } catch (error) {
        console.error('Erro ao consultar o banco de dados:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

module.exports = controllerLogin;
