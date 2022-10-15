import Category from '../Models/Category.js';

const categoriesRepository = {
  findAll() {
    return Category.find({});
  },
  findByName(name) {
    return Category.find({ name });
  },
  save(category) {
    return category.save();
  },
};

export default categoriesRepository;
