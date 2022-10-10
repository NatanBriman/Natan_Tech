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
  findByCategory(categoryName) {
    return Product.find({ category: { name: categoryName } }).populate(
      'manufacturer category'
    );
  },
};

export default productsRepository;
