import Product from '../Models/Product.js';
import productsRepository from '../Repositories/ProductsRepository.js';

const productsService = {
  getAllProducts() {
    return productsRepository.findAll();
  },
  getProductsByName(name) {
    return productsRepository.findByName(name);
  },
  addProduct(product) {
    const newProduct = new Product(product);

    return productsRepository.save(newProduct);
  },
};

export default productsService;
