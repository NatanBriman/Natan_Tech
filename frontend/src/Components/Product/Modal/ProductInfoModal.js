import { useState } from 'react';
import { Container, Modal, Col, Row, Card } from 'react-bootstrap';
import Rating from '../../Review/Rating';
import ReviewsList from '../../Review/ReviewsCard';
import ProductDetailsCard from '../Cards/ProductDetailsCard';

const ProductInfoModal = ({ product, details, closeAction }) => {
  const [isShow, setIsShow] = useState(true);

  const handleClose = () => {
    setIsShow(false);

    closeAction();
  };

  const avgRating = 3; // TODO: Get from store

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
              <ProductDetailsCard product={product} details={details} />

              <Card className='justify-content-center shadow border border-2 border-danger'>
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