import { Schema, model } from 'mongoose';
import { userSchema } from './User.js';
import { productSchema } from './Product.js';

const reviewSchema = new Schema({
  user: userSchema,
  product: productSchema,
  content: {
    type: String,
    required: true,
    minLength: 1,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
});

const Review = model('Review', reviewSchema);

export default Review;
