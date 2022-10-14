import { Schema, model, mongoose } from 'mongoose';
import User from './User.js';
import { productSchema } from './Product.js';
import _ from 'lodash';

const getProductsSum = (products) =>
  products.reduce(
    (current, product) => current + product.price * product.quantity,
    0
  );

const orderSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: User,
    required: true,
    index: true,
  },
  products: [productSchema],
  totalPrice: {
    // TODO Use RamdaJs
    type: Number,
    default: function () {
      return getProductsSum(this.products);
    },
  },
  confirmationCode: {
    type: String,
    minLength: [1, 'confirmationCode must be at least 1'],
    required: true,
    unique: true,
  },
});

const Order = model('Order', orderSchema);

export default Order;
