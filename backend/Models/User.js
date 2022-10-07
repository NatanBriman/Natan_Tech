const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: [true, 'Email already exists'],
    validate: [isEmail, 'Invalid Email'],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, 'Password must be at least 6 characters'],
    maxLength: [12, 'Password must be at most 12 characters'],
  },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
