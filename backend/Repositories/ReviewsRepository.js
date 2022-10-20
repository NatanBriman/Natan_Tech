import Review from '../Models/Review.js';

const reviewsRepository = {
  findAll() {
    return Review.find({});
  },
  findByProductId(productId) {
    return Review.find({ product: { _id: productId } });
  },
  findByUserId(userId) {
    return Review.find({ user: { _id: userId } });
  },
  save(review) {
    return review.save();
  },
};

export default reviewsRepository;
