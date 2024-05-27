const express = require('express');
const router = express.Router();
const { getAllImages } = require('../controllers/controllerImageGet.js');

router.get('/images', getAllImages);

module.exports = router;
