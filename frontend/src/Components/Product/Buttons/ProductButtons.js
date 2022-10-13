import { useContext } from 'react';
import StoreContext from '../../../Pages/Store/StoreContext';
import Row from 'react-bootstrap/Row';
import { AddToCartButton, FavoriteButton, QuantityButtons } from './index';

const ProductButtons = ({ product, isPurchaseButton }) => {
  const [currentQuantity, setCurrentQuantity] = useContext(StoreContext);

  return (
    <Row className='d-flex justify-content-center text-center align-items-center'>
      <QuantityButtons
        product={product}
        currentQuantity={currentQuantity}
        setCurrentQuantity={setCurrentQuantity}
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
