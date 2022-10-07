const User = require('../Models/User');

const findAll = () => User.find({});

const findByEmailAndPassword = (email, password) =>
  User.findOne({ email, password });

const save = (user) => user.save();

const usersRepository = { findByEmailAndPassword, save, findAll };

module.exports = usersRepository;
