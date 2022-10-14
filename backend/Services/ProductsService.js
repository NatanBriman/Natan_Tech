import { splitArrayByProperty } from '../Helpers/Helpers.js';
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
  async getAllInCategories() {
    const products = await productsRepository.findAll();

    const productsInCategories = splitArrayByProperty(
      products,
      'category.name'
    );

    return productsInCategories;
  },
};

export default productsService;
