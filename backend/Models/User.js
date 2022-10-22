import { Schema, model, mongoose } from 'mongoose';
import Product, { productSchema } from './Product.js';
import { DEFAULT_USER_IMAGE_URL } from '../Helpers/Constants.js';
import isEmail from 'validator/lib/isEmail.js';

export const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'Invalid email'],
    index: true,
  },
  password: {
    type: String,
    required: true,
    minLength: [6, 'password must be at least 6 characters'],
    maxLength: [12, 'password must be at most 12 characters'],
  },
  image: {
    type: String,
    default: DEFAULT_USER_IMAGE_URL,
  },
  favoriteProducts: [
    {
      type: mongoose.Types.ObjectId,
      ref: Product,
    },
  ],
  isManager: {
    type: Boolean,
    default: false,
  },
  currentCart: [productSchema],
  recentWatchedProducts: [productSchema],
});

const User = model('User', userSchema);

export default User;
