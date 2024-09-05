const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/performanceController');

// Ensure these methods exist in performanceController
router.post('/', performanceController.addPerformanceRecord);
router.get('/:internId', performanceController.getPerformanceRecords);
router.put('/:id', performanceController.updatePerformanceRecord);
router.delete('/:id', performanceController.deletePerformanceRecord);

module.exports = router;
