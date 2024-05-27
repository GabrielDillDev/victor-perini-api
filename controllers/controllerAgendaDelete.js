const pool = require('../db.js');

const deleteEvent = async (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM agenda WHERE id = $1';
    const values = [id];

    try {
        const client = await pool.connect();
        const result = await client.query(query, values);
        client.release();

        if (result.rowCount > 0) {
            res.status(200).json({ message: 'Evento excluído com sucesso' });
        } else {
            res.status(404).json({ error: 'Evento não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao excluir evento:', error);
        res.status(500).json({ error: 'Erro ao excluir evento' });
    }
};

module.exports = { deleteEvent };
