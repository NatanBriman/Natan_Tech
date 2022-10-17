import { useState } from 'react';
import { Card, Row, Ratio, Image, Col } from 'react-bootstrap';
import { QuantityProvider } from '../../../Pages/QuantityContext';
import ValueCard from '../../Utils/ValueCard';
import { FavoriteButton } from '../Buttons';
import ProductButtons from '../Buttons/ProductButtons';
import ProductInfoModal from '../Modal/ProductInfoModal';

const ProductSummaryRow = ({ product, isDisplayOnly = false }) => {
  const [currentQuantity, setCurrentQuantity] = useState(product.quantity);
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => setIsShowModal((isShow) => !isShow);

  const currentPrice = currentQuantity * product.price;

  return (
    <QuantityProvider value={[currentQuantity, setCurrentQuantity]}>
      <Card
        bg='secondary'
        className='clickable shadow border border-2 border-primary'
      >
        <Row>
          <Col sm={2} onClick={toggleModal}>
            <Ratio style={{ height: '8em', width: '8em' }} className='shadow'>
              <Image rounded src={product.image} alt='Product Image' />
            </Ratio>
          </Col>

          <Col sm={6} className='px-0' onClick={toggleModal}>
            <Card.Body className='p-1 text-start'>
              <Card.Title as='h1'>
                <b>{product.name}</b>
              </Card.Title>

              <Card.Subtitle>
                <h4>{product.manufacturer.name}</h4>
              </Card.Subtitle>

              <h6>{product.price}$</h6>
            </Card.Body>
          </Col>

          <Col
            sm={4}
            className='d-flex justify-content-around align-items-center'
          >
            <Row
              className='me-1 d-flex justify-content-between'
              style={{ width: '100%' }}
            >
              {!isDisplayOnly && (
                <Col>
                  <ProductButtons product={product} isPurchaseButton={false} />
                </Col>
              )}

              <Col sm={5} onClick={toggleModal}>
                <ValueCard text={`${currentPrice.toLocaleString()}$`} />
              </Col>

              {isDisplayOnly && (
                <Col sm={5}>
                  <FavoriteButton product={product} />
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Card>

      {isShowModal && (
        <ProductInfoModal
          closeAction={toggleModal}
          product={product}
          isDisplayOnly={isDisplayOnly}
        />
      )}
    </QuantityProvider>
  );
};

export default ProductSummaryRow;
