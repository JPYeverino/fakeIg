// Dependencies
const Post = require("../models/post");
const validationHandler = require('../validations/validationHandler')


exports.index = (req, res, next) => {
  try {
    
  } catch (error) {
    next(err);
  }
};

exports.store = async (req, res, next) => {
  console.log(req.file)
  try {
    validationHandler(req);

    let post = new Post();
    post.description = req.body.description;
    post.image = req.file.filename;
    post = await post.save();

    res.send(post);

  } catch (err) {
    next(err);
  }
};