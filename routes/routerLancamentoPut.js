const express = require('express');
const router = express.Router();
const controllerLancamentoPut = require('../controllers/controllerLancamentoPut.js');

router.put('/lancamento', controllerLancamentoPut);

module.exports = router;