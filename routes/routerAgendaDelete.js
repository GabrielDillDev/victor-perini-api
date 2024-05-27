const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/controllerAgendaDelete.js');

router.delete('/agenda/:id', agendaController.deleteEvent);

module.exports = router;
