import Product from '../Models/Product.js';

const productsRepository = {
  findAll() {
    return Product.find({}).populate('manufacturer category');
  },
  findByName(name) {
    return Product.find({ name }).populate('manufacturer category');
  },
  save(product) {
    return product.save();
  },
};

export default productsRepository;
