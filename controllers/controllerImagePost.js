const pool = require('../db.js');

const addImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Nenhum arquivo de imagem enviado' });
        }

        const imageBuffer = req.file.buffer;

        const query = 'INSERT INTO images (image) VALUES ($1) RETURNING id';
        const values = [imageBuffer];

        const { rows } = await pool.query(query, values);

        const newImageId = rows[0].id;

        res.status(200).json({ message: 'Imagem adicionada com sucesso', id: newImageId });
    } catch (error) {
        console.error('Erro ao adicionar imagem:', error);
        res.status(500).json({ error: 'Erro ao adicionar imagem' });
    }
};

module.exports = { addImage };
