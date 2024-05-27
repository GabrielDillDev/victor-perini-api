const pool = require('../db.js');

const atualizarBiografia = async (req, res) => {
    const novoTexto = req.body.novoTexto;

    try {
        const query = 'UPDATE biografia SET texto = $1 WHERE id = 1';
        const client = await pool.connect();
        await client.query(query, [novoTexto]);
        client.release();

        res.status(200).json({ message: 'Biografia atualizada com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar a biografia:', error);
        res.status(500).json({ error: 'Erro ao atualizar a biografia' });
    }
};

module.exports = atualizarBiografia;
