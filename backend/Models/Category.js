import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is a required field'],
    index: true,
  },
});

const Category = model('Category', categorySchema);

export default Category;
