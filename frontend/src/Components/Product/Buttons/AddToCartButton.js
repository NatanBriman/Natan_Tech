import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { cartActions } from '../../../Redux/Features/CartSlice';

const AddToCartButton = ({ product, currentQuantity }) => {
  console.log(currentQuantity);
  const dispatch = useDispatch();
  const currentPrice = currentQuantity * product.price;

  const handleAddToCart = () => {
    // TODO Show Swal Alert on the side of the screen
    const { addProduct } = cartActions;

    dispatch(addProduct({ ...product, quantity: currentQuantity }));
  };

  return (
    <Button
      onClick={handleAddToCart}
      variant='success'
      style={{ width: '100%', color: 'black' }}
      className='p-1 shadow border border-dark d-flex justify-content-between align-items-center'
    >
      <b>{currentPrice}$</b>

      <BsFillCartPlusFill />
    </Button>
  );
};

export default AddToCartButton;
