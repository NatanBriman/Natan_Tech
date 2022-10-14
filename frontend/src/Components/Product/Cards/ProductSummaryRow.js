import { useState } from 'react';
import { Card, Row, Ratio, Image, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { QuantityProvider } from '../../../Pages/QuantityContext';
import { cartActions } from '../../../Redux/Features/CartSlice';
import DeleteButton from '../../Delete/DeleteButton';
import ProductButtons from '../Buttons/ProductButtons';

const ProductSummaryRow = ({ product }) => {
  const dispatch = useDispatch();
  const [currentQuantity, setCurrentQuantity] = useState(product.quantity);

  const deleteProduct = () => {
    const { removeProduct } = cartActions;

    dispatch(removeProduct(product._id));
  };

  const currentPrice = (currentQuantity * product.price).toLocaleString();

  return (
    <QuantityProvider value={[currentQuantity, setCurrentQuantity]}>
      <Row className='mb-3'>
        <Col sm={11}>
          <Card
            bg='secondary'
            className='shadow border border-2 border-primary'
          >
            <Row>
              <Col sm={2}>
                <Ratio
                  style={{ height: '8em', width: '8em' }}
                  className='shadow border-right border-dark'
                >
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

                  <Col className='d-flex justify-content-center align-items-center'>
                    <Card
                      bg='success'
                      className='m-0 p-0 shadow border border-2 border-dark d-flex justify-content-center align-items-center'
                      style={{ height: '100%', width: '100%' }}
                    >
                      <h1 className='display-5'>{currentPrice}$</h1>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col
          sm={1}
          className='p-0 d-flex align-items-center justify-content-center'
        >
          <DeleteButton
            withModal
            onDelete={deleteProduct}
            text='?להוריד מהעגלה'
          />
        </Col>
      </Row>
    </QuantityProvider>
  );
};

export default ProductSummaryRow;
