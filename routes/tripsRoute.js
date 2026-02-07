const express = require('express');

const tripsController = require('../controllers/tripsController');

const router = express.Router();

router.get('/', tripsController.getAllTrips);

router.get('/:id', tripsController.getTripsByID);

router.post('/', tripsController.newTrip);

router.put('/:id', tripsController.editTrip);

router.delete('/:id', tripsController.deleteTrip);

module.exports = router;