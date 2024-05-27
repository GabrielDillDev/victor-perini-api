const express = require('express');
const router = express.Router();
const controllerBioPut = require('../controllers/controllerBioPut.js');

router.put('/bio', controllerBioPut);

module.exports = router;