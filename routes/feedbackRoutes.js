const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Ensure these methods exist in feedbackController
router.post('/', feedbackController.addFeedback);
router.get('/:internId', feedbackController.getFeedback);
router.put('/:id', feedbackController.updateFeedback);
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;
