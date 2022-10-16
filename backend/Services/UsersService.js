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
  addProductToFavorites(userId, productId) {
    return usersRepository.addFavoriteProduct(userId, productId);
  },
};

export default usersService;
