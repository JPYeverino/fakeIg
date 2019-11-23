const express = require('express');
const postController = require('../controllers/postController');
const { hasDescription } = require('../validations/validators');
const uploadImage = require("../middlewares/multer");

const router = express.Router();

router.get('/', postController.index);
router.get('/:id', postController.show);
router.post(
  '/',
  hasDescription,
  uploadImage("posts").single("image"), 
  postController.store
);
router.patch('/:id', hasDescription, postController.update);


module.exports = router;