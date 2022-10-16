import express from 'express';
import _ from 'lodash';
import usersService from '../Services/UsersService.js';

const usersController = express();

usersController.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await usersService.getUserByCredentials({
      username,
      password,
    });

    if (user !== null) res.status(200).send(user);
    else throw new Error('😕 אימייל או סיסמה לא נכונים');
  } catch (error) {
    res.status(404).send(error.message);
  }
});

usersController.post('/register', async (req, res, next) => {
  const { user } = req.body;

  try {
    const newUser = await usersService.addUser(user);

    res.status(200).send(newUser);
  } catch (error) {
    res.status(404).send('אחד מהשדות כבר תפוס');
  }
});

usersController.post('/all', async (req, res, next) => {
  const { user } = req.body;

  try {
    await usersService.addUser(user);

    res.status(200).send(`User ${user.email} saved successfully`);
  } catch (error) {
    res
      .status(404)
      .send(`Something went wrong with saving the user ${user.email}`);
  }
});

usersController.get('/all', async (req, res, next) => {
  try {
    const users = await usersService.getAllUsers();

    res.send(users);
  } catch (error) {
    res.status(404).send();
  }
});

usersController.post('/favorite/change', async (req, res, next) => {
  const { userId, productId } = req.body;

  try {
    await usersService.toggleProductInFavorites(userId, productId);

    res.status(200).send('שינוי המוצר התבצע בהצלחה');
  } catch (error) {
    console.log(error.message);
    res.status(404).send('קרתה בעיה בשינוי המוצר');
  }
});

export default usersController;
