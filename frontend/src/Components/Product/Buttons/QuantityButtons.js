import { Button, Col } from 'react-bootstrap';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { showAlert } from '../../../Helpers/Helpers';
import { cartActions } from '../../../Redux/Features/CartSlice';

const QuantityButtons = ({ product, currentQuantity, setCurrentQuantity, isChangeCart }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (quantity) => {
    const changedQuantity = currentQuantity + quantity;

    setCurrentQuantity(changedQuantity);

    if (isChangeCart) {
      const { changeQuantity } = cartActions;

      dispatch(changeQuantity({ ...product, quantity: changedQuantity }));
      showAlert('success', 'הכמות עודכנה בהצלחה');
    }
  };

  const increaseQuantity = () => handleQuantityChange(1);
  const decreaseQuantity = () => handleQuantityChange(-1);

  const isMinQuantity = currentQuantity === 1;
  const isMaxQuantity = currentQuantity === product.unitsInStock;

  return (
    <>
      <Col sm={5}>
        <Button
          style={{ width: '100%', color: 'black' }}
          disabled={isMinQuantity}
          onClick={decreaseQuantity}
          variant='outline-danger'
          className='shadow border border-2 border-danger d-flex justify-content-center text-center align-items-center'
        >
          <AiOutlineMinus />
        </Button>
      </Col>

      <Col sm={2} className='d-flex justify-content-center'>
        <h4>
          <b>{currentQuantity}</b>
        </h4>
      </Col>

      <Col sm={5}>
        <Button
          style={{ width: '100%', color: 'black' }}
          disabled={isMaxQuantity}
          onClick={increaseQuantity}
          variant='outline-primary'
          className='shadow border border-2 border-primary d-flex justify-content-center text-center align-items-center'
        >
          <AiOutlinePlus />
        </Button>
      </Col>
    </>
  );
};

export default QuantityButtons;
