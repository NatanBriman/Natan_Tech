import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import api from '../../Api/Api';
import { WEBSITE_BACKGROUND_COLOR } from '../../Helpers/Constants';
import { handleGetOrdersByUser } from '../../Helpers/Helpers';
import { isEmpty } from 'lodash';

const getOrdersByUser = async (userId) => {
  const orders = await api.orders.getOrdersByUser(userId);

  return orders;
};

const OrdersPage = () => {
  const { _id } = useSelector((state) => state.user.user);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    handleGetOrdersByUser(() => getOrdersByUser(_id), setOrders, setError);
  }, []);

  const isNoOrders = isEmpty(orders);

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
      {isNoOrders ? (
        <h1>{error}</h1>
      ) : (
        orders.map((order) => <h1 key={order._id}>{order.confirmationCode}</h1>)
      )}
    </Container>
  );
};

export default OrdersPage;
