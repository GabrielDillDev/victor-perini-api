const pool = require('../db.js');

const controllerLancamentoGet = async (req, res) => {
    try {
        const query = 'SELECT * FROM lancamento';
        const { rows } = await pool.query(query);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Nenhum lançamento encontrado' });
        }

        const lancamento = rows[0]; 
        res.status(200).json({ lancamento });
    } catch (error) {
        console.error('Erro ao obter o lançamento:', error);
        res.status(500).json({ error: 'Erro ao obter o lançamento' });
    }
};

module.exports = controllerLancamentoGet;
