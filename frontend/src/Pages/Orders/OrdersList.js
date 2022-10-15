import { Card, Container, Col, Row } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import ValueCard from '../../Components/Utils/ValueCard';
import OrderCard from './OrderCard';

const OrdersList = ({ orders }) => {
  const isNoOrders = isEmpty(orders);

  return (
    <Card
      bg='secondary'
      style={{ width: '100%', height: '100%' }}
      className='mt-2 p-0 shadow border border-2 border-success'
    >
      <Card.Header className='text-center' style={{ width: '100%' }}>
        <Card.Title
          as='h1'
          className='d-flex justify-content-between align-items-center'
        >
          {!isNoOrders && (
            <Col sm={2}>
              <ValueCard text={orders.length} color='info' />
            </Col>
          )}

          <Col className='text-end'>
            <b>ההזמנות שלי</b>
          </Col>
        </Card.Title>
      </Card.Header>

      <Card.Body style={{ width: '100%' }}>
        {isNoOrders && <h2 className='text-center'>😕 עוד לא הזמנת כלום</h2>}

        <Container fluid>
          {orders.map((order) => (
            <Row className='mb-3' key={order._id}>
              <OrderCard order={order} />
            </Row>
          ))}
        </Container>
      </Card.Body>
    </Card>
  );
};

export default OrdersList;
