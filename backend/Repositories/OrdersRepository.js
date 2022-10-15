import Order from '../Models/Order.js';

const ordersRepository = {
  findAll() {
    return Order.find({}).populate(
      'user products.manufacturer products.category'
    );
  },
  findByUserId(userId) {
    return Order.find({ user: { _id: userId } }).populate(
      'user products.manufacturer products.category'
    );
  },
  save(order) {
    return order.save();
  },
};

export default ordersRepository;
