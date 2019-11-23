// Dependencies
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true, select: false},
  name: {type: String, required: true},
});

UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(5);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};