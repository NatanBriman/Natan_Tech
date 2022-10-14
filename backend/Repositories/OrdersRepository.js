import Order from '../Models/Order.js';

const ordersRepository = {
  findAll() {
    return Order.find({}).populate('user');
  },
  findByUserId(userId) {
    return Order.find({ user: { _id: userId } }).populate('user');
  },
  save(order) {
    return order.save();
  },
};

export default ordersRepository;
