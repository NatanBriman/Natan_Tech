import { Schema, model } from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: [true, 'Email already exists'],
    validate: [isEmail, 'Invalid Email'],
    index: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [6, 'Password must be at least 6 characters'],
    maxLength: [12, 'Password must be at most 12 characters'],
  },
});

const User = model('User', userSchema);

export default User;
