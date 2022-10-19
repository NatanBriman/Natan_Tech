import Product from '../Models/Product.js';

const productsRepository = {
  findAll() {
    return Product.find({});
  },
  findByName(name) {
    return Product.find({ name });
  },
  save(product) {
    return product.save();
  },
  findByCategory(category) {
    return Product.find({ category });
  },
};

export default productsRepository;
