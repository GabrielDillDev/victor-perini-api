const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/controllerAgendaUpdate.js');

router.patch('/agenda/:id', agendaController.updateEvent);

module.exports = router;
