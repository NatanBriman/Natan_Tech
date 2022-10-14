import express from 'express';
import _ from 'lodash';
import ordersService from '../Services/OrdersService.js';
import { v4 as uuidv4 } from 'uuid';

const ordersController = express();

ordersController.post('/user', async (req, res, next) => {
  const { userId } = req.body;

  try {
    const orders = await ordersService.getOrdersByUserId(userId);

    if (!_.isEmpty(orders)) res.status(200).send(orders);
    else throw new Error('😕 עוד לא הזמנת כלום');
  } catch (error) {
    res.status(404).send(error.message);
  }
});

ordersController.post('/add', async (req, res, next) => {
  const { order } = req.body;

  try {
    const confirmationCode = uuidv4();

    await ordersService.addOrder({ ...order, confirmationCode });

    res.status(200).send(confirmationCode);
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
