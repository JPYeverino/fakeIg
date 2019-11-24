// Dependencies
const express = require('express');
const followController = require('../controllers/followController');

const router = express.Router();

router.get('/', followController.index); // Retrieving user following
router.get('/followers', followController.followers); // Retrieving user following
router.post('/:id', followController.follow); // Follow new user
router.delete('/:id', followController.unfollow); // Unfollow a user


module.exports = router;



