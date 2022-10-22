import Category from '../Models/Category.js';
import categoriesRepository from '../Repositories/CategoriesRepository.js';

const categoriesService = {
  getAllCategories() {
    return categoriesRepository.findAll();
  },
  getCategoriesByName(name) {
    return categoriesRepository.findByName(name);
  },
  addCategory(category) {
    const newCategory = new Category(category);

    return categoriesRepository.save(newCategory);
  },
};

export default categoriesService;
