const express = require('express');
const router = express.Router();
const { getBiografia } = require('../controllers/controllerBioGet.js');

router.get('/bio', getBiografia);

module.exports = router;
