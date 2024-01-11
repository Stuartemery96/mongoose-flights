const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// all paths start with "/"

// GET /flights/:flightId/tickets/new (new functionality)
router.get('/flights/:flightId/tickets/new', ticketsCtrl.new);
// POST /flights/:flightId/tickets (create functionality)
router.post('/flights/:flightId/tickets', ticketsCtrl.create);
// DELETE  /tickets/:id
router.post('/flights/:flightId', ticketsCtrl.delete)

module.exports = router;