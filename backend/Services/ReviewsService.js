import Review from '../Models/Review.js';
import reviewsRepository from '../Repositories/ReviewsRepository.js';

const reviewsService = {
  getAllReviews() {
    return reviewsRepository.findAll();
  },
  getReviewsByProductId(productId) {
    return reviewsRepository.findByProductId(productId);
  },
  getReviewsByUserId(userId) {
    return reviewsRepository.findByUserId(userId);
  },
  addReview(review) {
    const newReview = new Review(review);

    return reviewsRepository.save(newReview);
  },
};

export default reviewsService;
