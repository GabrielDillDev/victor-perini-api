const pool = require('../db.js');

const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, data_evento, endereco } = req.body;

    if (!titulo || !descricao || !data_evento || !endereco) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const query = 'UPDATE agenda SET titulo = $1, descricao = $2, data_evento = $3, endereco = $4 WHERE id = $5';
    const values = [titulo, descricao, data_evento, endereco, id];

    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();

        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Evento atualizado com sucesso' });
        } else {
            res.status(404).json({ error: 'Evento não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao atualizar evento:', error);
        res.status(500).json({ error: 'Erro ao atualizar evento' });
    }
};

module.exports = { updateEvent };
