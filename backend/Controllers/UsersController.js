const express = require('express');
const usersService = require('../Services/UsersService');

const usersController = express();

usersController.get('/:email/:password', async (req, res, next) => {
  const { email, password } = req.params;

  try {
    const user = await usersService.getUserByEmailAndPassword(email, password);

    if (user !== null) res.status(200).send(user);
    else throw new Error('😕 אימייל או סיסמה לא נכונים');
  } catch (error) {
    res.status(404).send(error.message);
  }
});

usersController.get('/save/:email/:password', async (req, res, next) => {
  const { email, password } = req.params;

  try {
    const user = await usersService.saveUser(email, password);

    res.status(200).send('User saved successfully');
  } catch (error) {
    res.status(404).send(`Something went wrong with saving the user ${email}`);
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
