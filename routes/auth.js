// Dependencies
const express = require('express');
const authController = require('../controllers/authController');
const { isEmail, hasPassword, hasName } = require('../validations/validators');

const passportJWT = require('../middlewares/passport.JWT')();

const router = express.Router();

// Set endpoints
router.post("/login", authController.login);
router.post("/signup", [isEmail, hasPassword, hasName], authController.signup);
router.get("/me", passportJWT.authenticate(), authController.me);

module.exports = router;