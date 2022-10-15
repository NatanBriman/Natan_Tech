import { Card, Container, Row, Col } from 'react-bootstrap';
import Barcode from 'react-barcode';
import { isEmpty } from 'lodash';
import ValueCard from '../../Components/Utils/ValueCard';

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
            <Row className='mb-2' key={order._id}>
              <Barcode width={1} displayValue={true} value={order._id} />
            </Row>
          ))}
        </Container>
      </Card.Body>
    </Card>
  );
};

export default OrdersList;
