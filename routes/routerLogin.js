const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/controllerLogin.js');

router.post('/login', controllerLogin);

module.exports = router;
