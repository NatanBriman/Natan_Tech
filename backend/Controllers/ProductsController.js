import express from 'express';
import { isEmpty } from '../Helpers/Helpers.js';
import productsService from '../Services/ProductsService.js';

const productsController = express();

productsController.post('/name', async (req, res, next) => {
  const { name } = req.body;

  try {
    const products = await productsService.getProductsByName(name);

    if (!isEmpty(products)) res.status(200).send(products);
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

export default productsController;
