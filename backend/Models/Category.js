import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is a required field'],
    index: true,
  },
  totalProducts: {
    type: Number,
    min: [0, 'totalProducts must be at least 0'],
    default: 0,
  },
});

const Category = model('Category', categorySchema);

export default Category;
