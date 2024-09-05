const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ensure these methods exist in authController
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

module.exports = router;
