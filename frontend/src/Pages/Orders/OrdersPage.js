import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { WEBSITE_BACKGROUND_COLOR } from '../../Helpers/Constants';
import api from '../../Api/Api';
import OrdersList from './OrdersList';

const getOrdersByUser = async (userId) => {
  const orders = await api.orders.getOrdersByUser(userId);

  return orders;
};

const OrdersPage = () => {
  const { _id } = useSelector((state) => state.user.user);
  const [orders, setOrders] = useState([]);

  const initializeOrders = async () => {
    const orders = await getOrdersByUser(_id);

    setOrders(orders);
  };

  useEffect(() => {
    initializeOrders();
  }, []);

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
          <OrdersList orders={orders} />
        </Row>
      </Container>
    </Container>
  );
};

export default OrdersPage;
