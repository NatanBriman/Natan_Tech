import { useState } from 'react';
import { Card, Row, Ratio, Image, Col } from 'react-bootstrap';
import { QuantityProvider } from '../../../Pages/QuantityContext';
import ValueCard from '../../Utils/ValueCard';
import ProductButtons from '../Buttons/ProductButtons';

const ProductSummaryRow = ({ product }) => {
  const [currentQuantity, setCurrentQuantity] = useState(product.quantity);

  const currentPrice = currentQuantity * product.price;

  return (
    <QuantityProvider value={[currentQuantity, setCurrentQuantity]}>
      <Card
        bg='secondary'
        className='clickable shadow border border-2 border-primary'
      >
        <Row>
          <Col sm={2}>
            <Ratio style={{ height: '8em', width: '8em' }} className='shadow'>
              <Image rounded src={product.image} alt='Product Image' />
            </Ratio>
          </Col>

          <Col sm={6} className='px-0'>
            <Card.Body className='p-1'>
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
            className='d-flex justify-content-center align-items-center'
          >
            <Row>
              <Col>
                <ProductButtons
                  className='p-0'
                  product={product}
                  isPurchaseButton={false}
                />
              </Col>

              <Col>
                <ValueCard text={`${currentPrice.toLocaleString()}$`} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </QuantityProvider>
  );
};

export default ProductSummaryRow;
