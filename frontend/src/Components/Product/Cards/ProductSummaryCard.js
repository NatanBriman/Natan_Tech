import { useState } from 'react';
import { Card, Row, Ratio, Image, Col, Button } from 'react-bootstrap';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { QuantityProvider } from '../../../Pages/QuantityContext';
import ProductButtons from '../Buttons/ProductButtons';

const ProductSummaryCard = ({ product, onDelete }) => {
  const [currentQuantity, setCurrentQuantity] = useState(product.quantity);

  const handleDelete = () => onDelete(product);

  return (
    <QuantityProvider value={[currentQuantity, setCurrentQuantity]}>
      <Row className='mb-3'>
        <Col sm={11}>
          <Card bg='light' className='shadow border border-2 border-primary'>
            <Row>
              <Col sm={2}>
                <Ratio
                  style={{ height: '8em', width: '8em' }}
                  className='shadow border-right border-dark'
                >
                  <Image rounded src={product.image} alt='Product Image' />
                </Ratio>
              </Col>

              <Col sm={7} className='px-0'>
                <Card.Body className='p-1'>
                  <Card.Title>
                    <h1>
                      <b>{product.name}</b>
                    </h1>
                  </Card.Title>

                  <Card.Subtitle>
                    <h4>{product.manufacturer.name}</h4>
                  </Card.Subtitle>

                  <h6>{product.price}$</h6>
                </Card.Body>
              </Col>

              <Col
                sm={2}
                className='ms-5 d-flex justify-content-center align-items-center'
              >
                <ProductButtons product={product} isPurchaseButton={false} />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col
          sm={1}
          className='d-flex justify-content-center align-items-center'
        >
          <Button
            onClick={handleDelete}
            variant='danger'
            style={{ height: '100%', width: '100%' }}
            className='p-1 ms-3 border border-dark border-2 shadow text-center'
          >
            <RiDeleteBack2Line
              style={{ color: 'black', height: '100%', width: '100%' }}
            />
          </Button>
        </Col>
      </Row>
    </QuantityProvider>
  );
};

export default ProductSummaryCard;
