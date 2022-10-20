import { useEffect, useState } from 'react';
import { Container, Modal, Col, Row, Card } from 'react-bootstrap';
import api from '../../../Api/Api';
import { getProductDetails } from '../../../Helpers/Helpers';
import Rating from '../../Review/Rating';
import ReviewsList from '../../Review/ReviewsCard';
import ProductDetailsCard from '../Cards/ProductDetailsCard';

const getProductReviews = async (productId) => {
  const reviews = await api.reviews.getReviewsByProductId(productId);

  return reviews;
};

const ProductInfoModal = ({
  closeAction,
  product,
  isPurchaseButton = false,
  isDisplayOnly = false,
}) => {
  const [isShow, setIsShow] = useState(true);
  const [reviews, setReviews] = useState([]);

  const handleClose = () => {
    setIsShow(false);

    closeAction();
  };

  const initializeReviews = async () => {
    const reviews = await getProductReviews(product._id);

    setReviews(reviews);
  };

  useEffect(() => {
    initializeReviews();
  }, []);

  const avgRating = Math.round(
    reviews
      .map((review) => review.rating)
      .reduce((sum, rating) => sum + rating, 0) / reviews.length
  );
  const productDetails = getProductDetails(product);

  return (
    <Modal
      onHide={handleClose}
      backdrop='static'
      size='xl'
      centered
      show={isShow}
    >
      <Modal.Header closeButton />

      <Container className='my-2'>
        <Row className='mx-1 d-flex justify-content-between'>
          <Col sm={8}>
            <Row style={{ height: '38em' }}>
              <ReviewsList product={product} reviews={reviews} />
            </Row>
          </Col>

          <Col className='ms-3 d-flex align-items-evenly'>
            <Row>
              <ProductDetailsCard
                product={product}
                details={productDetails}
                isPurchaseButton={isPurchaseButton}
                isDisplayOnly={isDisplayOnly}
              />

              <Card
                bg='secondary'
                className='justify-content-center shadow border border-2 border-danger'
              >
                <Rating rating={avgRating} text='דירוג ממוצע' />
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default ProductInfoModal;
