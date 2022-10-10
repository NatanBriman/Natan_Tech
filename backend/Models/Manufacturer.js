import { Schema, model } from 'mongoose';

const manufacturerSchema = new Schema({
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

const Manufacturer = model('Manufacturer', manufacturerSchema);

export default Manufacturer;
