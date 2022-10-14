import { useContext } from 'react';
import QuantityContext from '../../../Pages/QuantityContext';
import Row from 'react-bootstrap/Row';
import { AddToCartButton, FavoriteButton, QuantityButtons } from './';

const ProductButtons = ({ product, isPurchaseButton }) => {
  const [currentQuantity, setCurrentQuantity] = useContext(QuantityContext);

  return (
    <Row className='d-flex justify-content-center text-center align-items-center'>
      <QuantityButtons
        product={product}
        currentQuantity={currentQuantity}
        setCurrentQuantity={setCurrentQuantity}
        isChangeCart={!isPurchaseButton}
      />

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
