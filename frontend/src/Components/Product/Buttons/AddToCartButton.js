import Button from 'react-bootstrap/Button';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { showAlert } from '../../../Helpers/Helpers';
import { cartActions } from '../../../Redux/Features/CartSlice';

const AddToCartButton = ({ product, currentQuantity }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const { addProduct } = cartActions;

    dispatch(addProduct({ ...product, quantity: currentQuantity }));
    showAlert('success', '!המוצר נוסף לעגלה');
  };

  const currentPrice = currentQuantity * product.price;

  return (
    <Button
      onClick={handleAddToCart}
      variant='outline-success'
      style={{ color: 'black' }}
      className='p-1 shadow border border-3 border-success d-flex justify-content-between align-items-center'
    >
      <b>{currentPrice}$</b>

      <BsFillCartPlusFill />
    </Button>
  );
};

export default AddToCartButton;
