import { Schema, model } from 'mongoose';
import { DEFAULT_PRODUCT_IMAGE_URL } from '../Helpers/Constants.js';
import { manufacturerSchema } from './Manufacturer.js';
import { categorySchema } from './Category.js';

export const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is a required field'],
    index: true,
  },
  manufacturer: manufacturerSchema,
  image: {
    type: String,
    default: DEFAULT_PRODUCT_IMAGE_URL,
  },
  productionDate: {
    type: Date,
    required: [true, 'productionDate is a required field'],
  },
  addDate: {
    type: Date,
    default: new Date(),
  },
  price: {
    type: Number,
    required: [true, 'price is a required field'],
    min: [0, 'price must be at least 0'],
  },
  category: categorySchema,
  unitsInStock: {
    type: Number,
    required: [true, 'unitsInStock is a required field'],
    min: [1, 'unitsInStock must be at least 1'],
  },
  quantity: {
    type: Number,
    default: 1,
    min: [1, 'quantity must be at least 1'],
  },
});

const Product = model('Product', productSchema);

export default Product;
