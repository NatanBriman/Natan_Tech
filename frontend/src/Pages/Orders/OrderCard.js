import { useState } from 'react';
import { Card, Col, Collapse, Row } from 'react-bootstrap';
import { getDateString } from '../../Helpers/Helpers';
import Barcode from 'react-barcode';
import ValueBox from '../../Components/Utils/Information/ValueBox';
import ProductSummaryRow from '../../Components/Product/Cards/ProductSummaryRow';

const OrderCard = ({ order }) => {
  const [isShowDetails, setIsShowDetails] = useState(false);

  const toggleShowDetails = () => setIsShowDetails((isShow) => !isShow);

  const formattedOrderDate = getDateString(new Date(order.date));
  const formattedOrderPrice = order.totalPrice.toLocaleString();

  return (
    <Card
      onClick={toggleShowDetails}
      bg='secondary'
      className='clickable shadow border border-2 border-primary'
    >
      <Row>
        <Col sm={4} className='shadow text-center rounded m-1'>
          <Barcode background='#6c757d' width={1} value={order._id} />
        </Col>
        <Col sm={7} className='d-flex align-items-center'>
          <Row
            style={{ width: '100%' }}
            className='d-flex justify-content-around align-items-center'
          >
            <Col sm={3}>
              <ValueBox text={`${formattedOrderPrice}$`} />
            </Col>

            <Col sm={5}>
              <ValueBox text={formattedOrderDate} color='danger' />
            </Col>
          </Row>
        </Col>
      </Row>

      <Collapse
        in={isShowDetails}
        mountOnEnter
        unmountOnExit
        onClick={toggleShowDetails}
      >
        <Card.Body style={{ width: '100%' }}>
          {order.products.map((product) => (
            <Row className='mb-3' key={product._id}>
              <Col>
                <ProductSummaryRow product={product} isDisplayOnly />
              </Col>
            </Row>
          ))}
        </Card.Body>
      </Collapse>
    </Card>
  );
};

export default OrderCard;
