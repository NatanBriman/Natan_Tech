import { useContext } from 'react';
import QuantityContext from '../../../Pages/QuantityContext';
import { Col, Row } from 'react-bootstrap';
import { AddToCartButton, FavoriteButton, QuantityButtons } from './';
import ValueBox from '../../Utils/Information/ValueBox';

const ProductButtons = ({
  product,
  isPurchaseButton,
  isDisplayOnly = false,
}) => {
  const [currentQuantity, setCurrentQuantity] = useContext(QuantityContext);

  const formattedProductTotalPrice = (
    product.quantity * product.price
  ).toLocaleString();

  return (
    <Row className='d-flex justify-content-center text-center align-items-center'>
      {!isDisplayOnly ? (
        <QuantityButtons
          product={product}
          currentQuantity={currentQuantity}
          setCurrentQuantity={setCurrentQuantity}
          isChangeCart={!isPurchaseButton}
        />
      ) : (
        <Col>
          <ValueBox text={`${formattedProductTotalPrice}$`} />
        </Col>
      )}

      {isPurchaseButton && (
        <Row className='mt-2'>
          <AddToCartButton
            product={product}
            currentQuantity={currentQuantity}
          />
        </Row>
      )}

      <Row className='mt-2'>
        <FavoriteButton product={product} />
      </Row>
    </Row>
  );
};

export default ProductButtons;
