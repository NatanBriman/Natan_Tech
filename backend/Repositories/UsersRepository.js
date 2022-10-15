import User from '../Models/User.js';

const usersRepository = {
  findAll() {
    return User.find({});
  },
  findByEmailAndPassword(email, password) {
    return User.findOne({ email, password });
  },
  save(user) {
    return user.save();
  },
};

export default usersRepository;
