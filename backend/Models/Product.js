import { Schema, model, mongoose } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: [String, 'name is a String field'],
    required: [true, 'name is a required field'],
    index: true,
  },
  manufacturer: {
    type: [mongoose.Types.ObjectId, 'manufacturer is an ObjectId field'],
    ref: 'Manufacturer',
    required: [true, 'manufacturer is a required field'],
  },
  productionDate: {
    type: [Date, 'productionDate is a Date field'],
    required: [true, 'productionDate is a required field'],
  },
  addDate: {
    type: [Date, 'addDate is a Date field'],
    default: new Date(),
  },
  price: {
    type: [Number, 'price is a Number field'],
    required: [true, 'price is a required field'],
    min: [0, 'price must be at least 0'],
  },
  category: {
    type: [mongoose.Types.ObjectId, 'category is an ObjectId field'],
    ref: 'Category',
    required: [true, 'category is a required field'],
  },
  unitsInStock: {
    type: [Number, 'unitsInStock is a Number field'],
    required: [true, 'unitsInStock is a required field'],
    min: [1, 'unitsInStock must be at least 1'],
  },
});

const Product = model('Product', productSchema);

export default Product;
