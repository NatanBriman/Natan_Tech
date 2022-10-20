import { Schema, model } from 'mongoose';

export const manufacturerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is a required field'],
    index: true,
  },
});

const Manufacturer = model('Manufacturer', manufacturerSchema);

export default Manufacturer;
