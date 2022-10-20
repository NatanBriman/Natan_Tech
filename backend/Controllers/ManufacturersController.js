import express from 'express';
import manufacturersService from '../Services/ManufacturersService.js';

const manufacturersController = express();

manufacturersController.get('/all', async (req, res, next) => {
  try {
    const manufacturers = await manufacturersService.getAllManufacturers();

    res.send(manufacturers);
  } catch (error) {
    res.status(404).send();
  }
});

manufacturersController.post('/add', async (req, res, next) => {
  try {
    const { manufacturer } = req.body;

    await manufacturersService.addManufacturer(manufacturer);

    res.status(200).send('היצרן נוסף בהצלחה');
  } catch (error) {
    res.status(404).send();
  }
});

export default manufacturersController;
