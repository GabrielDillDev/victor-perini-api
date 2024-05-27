const pool = require('../db.js');

const controllerLancamentoPut = async (req, res) => {
    const { novoVideoUrl } = req.body;

    try {
        const query = 'UPDATE lancamento SET videourl = $1 WHERE id = 1';
        await pool.query(query, [novoVideoUrl]);

        res.status(200).json({ message: 'Lançamento atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar o lançamento:', error);
        res.status(500).json({ error: 'Erro ao atualizar o lançamento' });
    }
};

module.exports = controllerLancamentoPut;
