const pool = require('../db.js');

const getBiografia = async (req, res) => {
    try {
        const sql = 'SELECT texto FROM biografia';
        const client = await pool.connect();
        const result = await client.query(sql);
        client.release();

        if (result.rows.length === 0) {
            res.status(404).send('Nenhuma biografia encontrada');
            return;
        }

        const biografia = result.rows[0].texto;
        res.status(200).json({ biografia });
    } catch (error) {
        console.error('Erro ao buscar biografia:', error);
        res.status(500).send('Erro ao buscar biografia');
    }
};

module.exports = { getBiografia };

