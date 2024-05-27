const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/controllerAgendaGet.js');

router.get('/agenda', agendaController.getAllEvents);

module.exports = router;