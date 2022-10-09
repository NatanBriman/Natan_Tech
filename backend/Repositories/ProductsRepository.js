import Product from '../Models/Product.js';

const usersRepository = {
  findAll() {
    return Product.find({});
  },
  findByName(name) {
    return Product.find({ name });
  },
  save(product) {
    return product.save();
  },
};

export default usersRepository;
