const express = require('express');
const router = express.Router();
const controllerLancamentoGet = require('../controllers/controllerLancamentoGet.js');

router.get('/lancamento', controllerLancamentoGet);

module.exports = router;