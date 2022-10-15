import User from '../Models/User.js';
import usersRepository from '../Repositories/UsersRepository.js';

const usersService = {
  getAllUsers() {
    return usersRepository.findAll();
  },
  getUserByEmailAndPassword(email, password) {
    return usersRepository.findByEmailAndPassword(email, password);
  },
  addUser(user) {
    const newUser = new User(user);

    return usersRepository.save(newUser);
  },
};

export default usersService;
