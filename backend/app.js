import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import usersController from './Controllers/UsersController.js';
import productsController from './Controllers/ProductsController.js';

const app = express();

// view engine setup
app.use(cors());
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use(express.static(join(__dirname, 'public')));

// Import the mongoose module
import pkg from 'mongoose';
const { connect, connection } = pkg;
// Set up default mongoose connection
const DB_NAME = 'Natan_Tech';
const DB_URL = 'mongodb://127.0.0.1';

const mongoDB = `${DB_URL}/${DB_NAME}`;
connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/users', usersController);
app.use('/products', productsController);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
