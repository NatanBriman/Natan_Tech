import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import api from '../../Api/Api';
import ItemsContainer from '../../Components/Utils/Information/ItemsContainer';
import { LOCAL_STORAGE_KEYS } from '../../Helpers/Constants';
import useLocalStorageFromAPI from '../../Hooks/useLocalStorageFromAPI';
import { userSelector } from '../../Redux/Features/User/UserSlice';
import OrderCard from './OrderCard';

const OrdersPage = () => {
  const { _id } = useSelector(userSelector);
  const [orders, ..._] = useLocalStorageFromAPI(
    [],
    api.orders.getOrdersByUser,
    LOCAL_STORAGE_KEYS.orders,
    _id
  );

  return (
    <Container className='mb-2' fluid style={{ height: '100%' }}>
      <Row>
        <ItemsContainer
          items={orders}
          title='ההזמנות שלי'
          emptyText='😕 עוד לא הזמנת כלום'
          component={(order) => (
            <Row className='mb-3'>
              <OrderCard order={order} />
            </Row>
          )}
        />
      </Row>
    </Container>
  );
};

export default OrdersPage;
