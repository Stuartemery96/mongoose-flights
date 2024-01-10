const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All paths start with "/flights"

// Get /flights (index Action)
router.get('/', flightsCtrl.index);
// Get /flights/new (new Action)
router.get('/new', flightsCtrl.new);
// Post /flights (create Action)
router.post('/', flightsCtrl.create);
// GET /flights/:id (Show Functionality)
router.get('/:id', flightsCtrl.show);

module.exports = router;
