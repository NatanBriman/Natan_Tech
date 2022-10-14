import express from 'express';
import _ from 'lodash';
import ordersService from '../Services/OrdersService.js';

const ordersController = express();

ordersController.post('/user', async (req, res, next) => {
  const { userId } = req.body;

  try {
    const orders = await ordersService.getOrdersByUserId(userId);

    if (!_.isEmpty(orders)) res.status(200).send(orders);
    else throw new Error('😕 אין לך הזמנות עם השם הזה');
  } catch (error) {
    res.status(404).send(error.message);
  }
});

ordersController.post('/add', async (req, res, next) => {
  const { order } = req.body;

  try {
    await ordersService.addOrder(order);

    res.status(200).send(`Order ${order.confirmationCode} saved successfully`);
  } catch (error) {
    res
      .status(404)
      .send(
        `Something went wrong with saving the order ${order.confirmationCode}`
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
