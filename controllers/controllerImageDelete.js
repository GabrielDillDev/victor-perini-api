const pool = require('../db.js');

const deleteImage = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'ID da imagem não fornecido' });
    }

    try {
        const query = 'DELETE FROM images WHERE id = $1';
        const result = await pool.query(query, [parseInt(id, 10)]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Imagem não encontrada' });
        }

        res.status(200).json({ message: 'Imagem excluída com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir imagem:', error);
        res.status(500).json({ error: 'Erro ao excluir imagem' });
    }
};

module.exports = { deleteImage };
