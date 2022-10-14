import { Schema, model, mongoose } from 'mongoose';
import User from './User.js';
import { productSchema } from './Product.js';
import isEmpty from 'validator/lib/isEmpty.js';

const orderSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: User,
    required: true,
    index: true,
  },
  products: [
    {
      type: productSchema,
      required: true,
    },
  ],
  totalPrice: {
    // TODO Use RamdaJs
    type: Number,
    default: () =>
      this.products.reduce(
        (current, product) => current + product.price * product.quantity,
        0
      ),
  },
  confirmationCode: {
    type: String,
    required: true,
    validate: [isEmpty, 'confirmationCode must be a non-empty string'],
    unique: true,
  },
});

const Order = model('Order', orderSchema);

export default Order;
