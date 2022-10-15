import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { BsCartCheck, BsArrowRight } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { WEBSITE_BACKGROUND_COLOR } from '../../Helpers/Constants';
import api from '../../Api/Api';
import DecisionModal from '../../Components/Utils/DecisionModal';
import ActionButton from '../../Components/Utils/ActionButton';
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
  const products = useSelector((state) => state.cart.products);
  const { _id } = useSelector((state) => state.user.user);
  const [isShowPurchaseModal, setIsShowPurchaseModal] = useState(false);

  const toggleModal = () => setIsShowPurchaseModal((isShow) => !isShow);

  const handlePurchase = () => {
    addOrder(products, _id);

    toggleModal();
  };

  const isNoProducts = products.length === 0;

  return (
    <Container
      fluid
      className='me-5 d-flex justify-content-center align-items-center'
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: WEBSITE_BACKGROUND_COLOR,
      }}
    >
      <Container className='my-2' fluid style={{ height: '100%' }}>
        <Row>
          <ShoppingCart products={products} />
        </Row>

        {!isNoProducts && (
          <Row>
            <Col className='d-flex justify-content-center align-items-center'>
              <ActionButton
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
          color='danger'
        />

        <ActionButton onClick={toggleModal} text='לא' icon={<BsArrowRight />} />
      </DecisionModal>
    </Container>
  );
};

export default CartPage;
