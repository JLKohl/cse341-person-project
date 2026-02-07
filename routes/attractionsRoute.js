const express = require('express');
const attractionsController = require('../controllers/attractionsController');
const router = express.Router();

router.get('/', attractionsController.getAllAttractions);

router.get('/:id', attractionsController.getAttractionById);

router.post('/', attractionsController.newAttraction);

router.put('/:id', attractionsController.editAttraction);

router.delete('/:id', attractionsController.deleteAttraction);

module.exports = router;