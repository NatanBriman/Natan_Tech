import { mongoose } from 'mongoose';
import User from '../Models/User.js';
import usersRepository from '../Repositories/UsersRepository.js';

const usersService = {
  getAllUsers() {
    return usersRepository.findAll();
  },
  getUserByCredentials(credentials) {
    return usersRepository.findByCredentials(credentials);
  },
  addUser(user) {
    const newUser = new User(user);

    return usersRepository.save(newUser);
  },
  async toggleProductInFavorites(userId, productId) {
    const user = await usersRepository.findById(userId);
    const favoriteProducts = user.favoriteProducts;
    const productIdAsObjectId = mongoose.Types.ObjectId(productId);

    const isProductId = (favoriteProductId) =>
      favoriteProductId.equals(productIdAsObjectId);
    const favoriteProductId = favoriteProducts.find(isProductId);

    if (favoriteProductId) {
      user.favoriteProducts = favoriteProducts.filter(
        (favoriteProduct) => favoriteProduct !== favoriteProductId
      );

      return user.save();
    }

    return usersRepository.addFavoriteProduct(userId, productId);
  },
};

export default usersService;
