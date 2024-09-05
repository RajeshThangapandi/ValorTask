const express = require('express');
const router = express.Router();
const internController = require('../controllers/internController');

// Ensure these methods exist in internController
router.post('/', internController.createIntern);
router.get('/', internController.getInterns);
router.get('/:id', internController.getInternById);
router.put('/:id', internController.updateIntern);
router.delete('/:id', internController.deleteIntern);

module.exports = router;
