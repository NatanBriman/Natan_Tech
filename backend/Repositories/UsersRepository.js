import User from '../Models/User.js';

const populateProperties = `favoriteProducts.manufacturer favoriteProducts.category currentCart.manufacturer favoriteProducts.category recentWatchedProducts.manufacturer recentWatchedProducts.category`;

const usersRepository = {
  findAll() {
    return User.find({}).populate(populateProperties);
  },
  findByCredentials(credentials) {
    return User.findOne(credentials).populate(populateProperties);
  },
  save(user) {
    return user.save();
  },
  addFavoriteProduct(userId, productId) {
    return User.findByIdAndUpdate(userId, {
      $push: {
        favoriteProducts: productId,
      },
    });
  },
};

export default usersRepository;
