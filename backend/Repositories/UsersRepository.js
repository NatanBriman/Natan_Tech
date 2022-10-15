import User from '../Models/User.js';

const populateProperties = `favoriteProducts.manufacturer favoriteProducts.category currentCart.manufacturer favoriteProducts.category recentWatchedProducts.manufacturer recentWatchedProducts.category`;

const usersRepository = {
  findAll() {
    return User.find({}).populate(populateProperties);
  },
  findByEmailAndPassword(email, password) {
    return User.findOne({ email, password }).populate(populateProperties);
  },
  save(user) {
    return user.save();
  },
};

export default usersRepository;
