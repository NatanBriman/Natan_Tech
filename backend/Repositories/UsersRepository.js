import User from '../Models/User.js';

const pathsToPopulate = {
  path: 'favoriteProducts currentCart recentWatchedProducts',
  populate: 'manufacturer category',
};

const usersRepository = {
  findById(userId) {
    return User.findById(userId);
  },
  findAll() {
    return User.find({}).populate(pathsToPopulate);
  },
  findByCredentials(credentials) {
    return User.findOne(credentials).populate(pathsToPopulate);
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
  addManager(userId) {
    return User.findByIdAndUpdate(userId, { isManager: true });
  },
};

export default usersRepository;
