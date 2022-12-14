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
    else throw new Error('馃槙 讗讬诪讬讬诇 讗讜 住讬住诪讛 诇讗 谞讻讜谞讬诐');
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
    res.status(404).send('讗讞讚 诪讛砖讚讜转 讻讘专 转驻讜住');
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

    res.status(200).send('砖讬谞讜讬 讛诪讜爪专 讛转讘爪注 讘讛爪诇讞讛');
  } catch (error) {
    res.status(404).send('拽专转讛 讘注讬讛 讘砖讬谞讜讬 讛诪讜爪专');
  }
});

usersController.post('/update/manager', async (req, res, next) => {
  const { userId } = req.body;

  try {
    await usersService.addManagerRoleToUser(userId);

    res.status(200).send('讛诪砖转诪砖 讻注转 诪谞讛诇');
  } catch (error) {
    res.status(404).send('拽专转讛 讘注讬讛 讘砖讬谞讜讬 讛诪砖转诪砖 诇诪谞讛诇');
  }
});

export default usersController;
