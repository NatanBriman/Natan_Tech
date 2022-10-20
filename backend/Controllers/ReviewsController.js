import express from 'express';
import reviewsService from '../Services/ReviewsService.js';

const reviewsController = express();

reviewsController.get('/all', async (req, res, next) => {
  try {
    const reviews = await reviewsService.getAllReviews();

    res.send(reviews);
  } catch (error) {
    res.status(404).send();
  }
});

reviewsController.post('/product', async (req, res, next) => {
  try {
    const { productId } = req.body;

    const productReviews = await reviewsService.getReviewsByProductId(
      productId
    );

    res.send(productReviews);
  } catch (error) {
    res.status(404).send();
  }
});

reviewsController.post('/user', async (req, res, next) => {
  try {
    const { userId } = req.body;

    const userReviews = await reviewsService.getReviewsByUserId(userId);

    res.send(userReviews);
  } catch (error) {
    res.status(404).send();
  }
});

reviewsController.post('/add', async (req, res, next) => {
  try {
    const { review } = req.body;

    await reviewsService.addReview(review);

    res.status(200).send('הביקורת נוספה בהצלחה');
  } catch (error) {
    res.status(404).send();
  }
});

export default reviewsController;
