import express from 'express';
import categoriesService from '../Services/CategoriesService';

const categoriesController = express();

categoriesController.get('/all', async (req, res, next) => {
  try {
    const categories = await categoriesService.getAllCategories();

    res.send(categories);
  } catch (error) {
    res.status(404).send();
  }
});

export default categoriesController;
