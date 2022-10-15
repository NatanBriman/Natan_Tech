import { useState } from 'react';
import { Container, Modal, Col, Row, Card } from 'react-bootstrap';
import { getProductDetails } from '../../../Helpers/Helpers';
import Rating from '../../Review/Rating';
import ReviewsList from '../../Review/ReviewsCard';
import ProductDetailsCard from '../Cards/ProductDetailsCard';

const ProductInfoModal = ({
  closeAction,
  product,
  isPurchaseButton = false,
  isDisplayOnly = false,
}) => {
  const [isShow, setIsShow] = useState(true);

  const handleClose = () => {
    setIsShow(false);

    closeAction();
  };

  const avgRating = 3; // TODO: Get from store
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
            <Row style={{ height: '37em' }}>
              <ReviewsList />
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
