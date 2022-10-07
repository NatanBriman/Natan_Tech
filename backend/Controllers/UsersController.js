const express = require('express');
const usersService = require('../Services/UsersService');

const usersController = express();

usersController.get('/:email/:password', async (req, res, next) => {
  const { email, password } = req.params;

  try {
    const user = await usersService.getUserByEmailAndPassword(email, password);

    if (user !== null) res.send(user);
    else throw new Error(`User not found`);
  } catch (error) {
    res.status(404).send();
  }
});

usersController.get('/save/:email/:password', async (req, res, next) => {
  const { email, password } = req.params;

  try {
    const user = await usersService.saveUser(email, password);

    res.send(user);
  } catch (error) {
    res.status(404).send();
  }
});

usersController.get('/', async (req, res, next) => {
  try {
    const users = await usersService.getAllUsers();

    res.send(users);
  } catch (error) {
    res.status(404).send();
  }
});

module.exports = usersController;
