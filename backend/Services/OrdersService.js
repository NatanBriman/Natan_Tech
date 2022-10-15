import Order from '../Models/Order.js';
import ordersRepository from '../Repositories/OrdersRepository.js';

const ordersService = {
  getAllOrders() {
    return ordersRepository.findAll();
  },
  getOrdersByUserId(userId) {
    return ordersRepository.findByUserId(userId);
  },
  addOrder(order) {
    const newOrder = new Order(order);

    return ordersRepository.save(newOrder);
  },
};

export default ordersService;
