import express from 'express';
import categoriesService from '../Services/CategoriesService.js';

const categoriesController = express();

categoriesController.get('/all', async (req, res, next) => {
  try {
    const categories = await categoriesService.getAllCategories();

    res.send(categories);
  } catch (error) {
    res.status(404).send();
  }
});

categoriesController.post('/add', async (req, res, next) => {
  try {
    const { category } = req.body;

    await categoriesService.addCategory(category);

    res.status(200).send('הקטגוריה נוספה בהצלחה');
  } catch (error) {
    res.status(404).send();
  }
});

export default categoriesController;
