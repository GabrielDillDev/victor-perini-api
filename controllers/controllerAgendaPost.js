const pool = require('../db.js');

const addEvent = async (req, res) => {
    const { title, description, date, address } = req.body;

    const query = 'INSERT INTO agenda (titulo, descricao, data_evento, endereco) VALUES ($1, $2, $3, $4) RETURNING id';
    const values = [title, description, date, address];

    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();

        res.status(201).json({ message: 'Evento adicionado com sucesso', eventId: result.rows[0].id });
    } catch (error) {
        console.error('Erro ao adicionar evento:', error);
        res.status(500).json({ error: 'Erro ao adicionar evento' });
    }
};

module.exports = { addEvent };
