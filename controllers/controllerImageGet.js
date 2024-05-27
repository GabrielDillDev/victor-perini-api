const pool = require('../db.js');

const getAllImages = async (req, res) => {
    try {
        const query = 'SELECT image FROM images';
        const { rows } = await pool.query(query);

        const images = rows.map(row => row.image.toString('base64'));

        res.status(200).json({ images });
    } catch (error) {
        console.error('Erro ao buscar imagens:', error);
        res.status(500).json({ error: 'Erro ao buscar imagens' });
    }
};

module.exports = { getAllImages };
