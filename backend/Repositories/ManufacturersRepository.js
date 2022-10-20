import Manufacturer from '../Models/Manufacturer.js';

const manufacturersRepository = {
  findAll() {
    return Manufacturer.find({});
  },
  findByName(name) {
    return Manufacturer.find({ name });
  },
  save(manufacturer) {
    return manufacturer.save();
  },
};

export default manufacturersRepository;
