import { Container } from 'react-bootstrap';
import { WEBSITE_BACKGROUND_COLOR } from '../../Helpers/Constants';

const OrdersPage = () => {
  return (
    <Container
      fluid
      className='me-5 d-flex justify-content-center align-items-center'
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: WEBSITE_BACKGROUND_COLOR,
      }}
    ></Container>
  );
};

export default OrdersPage;
