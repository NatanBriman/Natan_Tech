import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { BsCartCheck, BsArrowRight } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { showAlert } from '../../Helpers/Helpers';
import { WEBSITE_BACKGROUND_COLOR } from '../../Helpers/Constants';
import { cartActions } from '../../Redux/Features/CartSlice';
import api from '../../Api/Api';
import DecisionModal from '../../Components/Utils/DecisionModal';
import ActionButton from '../../Components/Utils/Buttons/ActionButton';
import ShoppingCart from './ShoppingCart';

const addOrder = async (products, userId) => {
  try {
    await api.orders.addOrder(products, userId);
  } catch (error) {
    // TODO Make swal alert that something went wrong
    alert(error);
  }
};

const CartPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const { _id } = useSelector((state) => state.user.user);
  const [isShowPurchaseModal, setIsShowPurchaseModal] = useState(false);

  const toggleModal = () => setIsShowPurchaseModal((isShow) => !isShow);

  const handlePurchase = () => {
    addOrder(products, _id);

    deleteAllProducts();
    toggleModal();
    showAlert('success', 'ההזמנה התבצעה בהצלחה');
  };

  const deleteProduct = (productId) => {
    const { removeProduct } = cartActions;

    dispatch(removeProduct(productId));
  };

  const deleteAllProducts = () =>
    products.map((product) => deleteProduct(product._id));

  const isNoProducts = products.length === 0;

  return (
    <>
      <Container className='my-2' fluid style={{ height: '100%' }}>
        <Row>
          <ShoppingCart
            products={products}
            deleteProduct={deleteProduct}
            deleteAllProducts={deleteAllProducts}
          />
        </Row>

        {!isNoProducts && (
          <Row>
            <Col className='d-flex justify-content-center align-items-center'>
              <ActionButton
                color='success'
                onClick={toggleModal}
                text='מעבר לתשלום'
                icon={<BsCartCheck />}
                buttonClass='mt-5'
                textClass='display-5'
              />
            </Col>
          </Row>
        )}
      </Container>

      <DecisionModal
        isShow={isShowPurchaseModal}
        closeAction={toggleModal}
        text='תשלום'
      >
        <ActionButton
          onClick={handlePurchase}
          text='אישור תשלום'
          icon={<AiOutlineCheck />}
          color='success'
        />

        <ActionButton
          color='danger'
          onClick={toggleModal}
          text='לא'
          icon={<BsArrowRight />}
        />
      </DecisionModal>
    </>
  );
};

export default CartPage;
