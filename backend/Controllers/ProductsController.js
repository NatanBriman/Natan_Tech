import express from 'express';
import _ from 'lodash';
import productsService from '../Services/ProductsService.js';

const productsController = express();

productsController.post('/name', async (req, res, next) => {
  const { name } = req.body;

  try {
    const products = await productsService.getProductsByName(name);

    if (!_.isEmpty(products)) res.status(200).send(products);
    else throw new Error('😕 אין מוצרים עם השם הזה');
  } catch (error) {
    res.status(404).send(error.message);
  }
});

productsController.post('/', async (req, res, next) => {
  const { product } = req.body;

  try {
    await productsService.addProduct(product);

    res.status(200).send(`Product ${product.name} saved successfully`);
  } catch (error) {
    res
      .status(404)
      .send(`Something went wrong with saving the product ${product.name}`);
  }
});

productsController.get('/', async (req, res, next) => {
  try {
    const products = await productsService.getAllProducts();

    res.send(products);
  } catch (error) {
    res.status(404).send();
  }
});

productsController.get('/categories', async (req, res, next) => {
  try {
    const productsInCategories = await productsService.getAllInCategories();

    res.send(productsInCategories);
  } catch (error) {
    res.status(404).send();
  }
});

export default productsController;
