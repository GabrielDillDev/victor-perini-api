const pool = require('../db.js');

const getAllEvents = async (req, res) => {
    const query = 'SELECT * FROM agenda';

    try {
        const client = await pool.connect();
        const result = await client.query(query);
        client.release();

        res.status(200).json({ events: result.rows });
    } catch (error) {
        console.error('Erro ao buscar eventos da agenda:', error);
        res.status(500).json({ error: 'Erro ao buscar eventos da agenda' });
    }
};

module.exports = { getAllEvents };
