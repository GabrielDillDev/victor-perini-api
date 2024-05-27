const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/controllerAgendaPost.js');

router.post('/agenda', agendaController.addEvent);

module.exports = router;
