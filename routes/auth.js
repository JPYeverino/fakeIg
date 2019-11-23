// Dependencies
const express = require('express');
const authController = require('../controllers/authController');
const {isEmail, hasPassword, hasName} = require('../validations/validators');

const router = express.Router();

// Set endpoints
router.post("/login", authController.login);
router.post("/signup", [isEmail, hasPassword, hasName] , authController.signup);

module.exports = router;