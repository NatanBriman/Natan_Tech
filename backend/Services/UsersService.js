const User = require('../Models/User');
const usersRepository = require('../Repositories/UsersRepository');

const getAllUsers = () => usersRepository.findAll();

const getUserByEmailAndPassword = (email, password) => {
  return usersRepository.findByEmailAndPassword(email, password);
};

const saveUser = (email, password) => {
  const newUser = new User({ email, password });

  return usersRepository.save(newUser);
};

const usersService = { getUserByEmailAndPassword, saveUser, getAllUsers };

module.exports = usersService;
