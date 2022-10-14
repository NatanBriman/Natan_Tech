import { Schema, model, mongoose } from 'mongoose';
import { DEFAULT_PRODUCT_IMAGE_URL } from '../Helpers/Constants.js';
import Manufacturer from './Manufacturer.js';
import Category from './Category.js';

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is a required field'],
    index: true,
  },
  manufacturer: {
    type: mongoose.Types.ObjectId,
    ref: Manufacturer,
    required: [true, 'manufacturer is a required field'],
  },
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
    default: Date.now(),
  },
  price: {
    type: Number,
    required: [true, 'price is a required field'],
    min: [0, 'price must be at least 0'],
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: Category,
    required: [true, 'category is a required field'],
  },
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

export { productSchema };
