import express from 'express';
import _ from 'lodash';
import usersService from '../Services/UsersService.js';

const usersController = express();

usersController.post('/login', async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (_.isEmpty(email) || _.isEmpty(password))
      throw new Error('?מה יש לך לחפש פה');

    const user = await usersService.getUserByEmailAndPassword(email, password);

    if (user !== null) res.status(200).send(user);
    else throw new Error('😕 אימייל או סיסמה לא נכונים');
  } catch (error) {
    res.status(404).send(error.message);
  }
});

usersController.post('/register', async (req, res, next) => {
  const { user } = req.body;

  try {
    await usersService.addUser(user);

    res.status(200).send('ההרשמה התבצעה בהצלחה');
  } catch (error) {
    res.status(404).send(error.message);
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

usersController.get('/', async (req, res, next) => {
  try {
    const users = await usersService.getAllUsers();

    res.send(users);
  } catch (error) {
    res.status(404).send();
  }
});

export default usersController;
