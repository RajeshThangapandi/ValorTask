const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Ensure these methods exist in taskController
router.post('/', taskController.assignTask);
router.get('/:internId', taskController.getTasks);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
