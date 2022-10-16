import express from 'express';
import ordersService from '../Services/OrdersService.js';
import _ from 'lodash';

const ordersController = express();

ordersController.post('/user', async (req, res, next) => {
  const { userId } = req.body;

  try {
    const orders = await ordersService.getOrdersByUserId(userId);

    res.status(200).send(orders);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

ordersController.post('/add', async (req, res, next) => {
  const { order } = req.body;

  try {
    await ordersService.addOrder(order);

    res.status(200).send('😄 ההזמנה בוצעה בהצלחה');
  } catch (error) {
    res
      .status(404)
      .send(
        `Something went wrong with saving the order by user ${order.user._id}`
      );
  }
});

ordersController.get('/', async (req, res, next) => {
  try {
    const orders = await ordersService.getAllOrders();

    res.send(orders);
  } catch (error) {
    res.status(404).send();
  }
});

export default ordersController;
