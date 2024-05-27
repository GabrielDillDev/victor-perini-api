const express = require('express');
const router = express.Router();
const { deleteImage } = require('../controllers/controllerImageDelete');

router.delete('/images/:id', deleteImage);

module.exports = router;
