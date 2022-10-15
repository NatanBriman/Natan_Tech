import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { getDateString } from '../../Helpers/Helpers';
import Barcode from 'react-barcode';
import ValueCard from '../../Components/Utils/ValueCard';

const OrderCard = ({ order }) => {
  const [isShowDetails, setIsShowDetails] = useState(false);

  const toggleShowDetails = () => setIsShowDetails((isShow) => !isShow);

  const formattedOrderDate = getDateString(new Date(order.date));
  const formattedOrderPrice = order.totalPrice.toLocaleString();

  return (
    <Card
      onClick={toggleShowDetails}
      bg='secondary'
      className='clickable shadow border border-2 border-info'
    >
      <Row>
        <Col sm={4} className='shadow text-center'>
          <Barcode background='#6c757d' width={1} value={order._id} />
        </Col>

        <Col sm={8} className='d-flex align-items-center'>
          <Row
            style={{ width: '100%' }}
            className='d-flex justify-content-around align-items-center'
          >
            <Col sm={3}>
              <ValueCard text={`${formattedOrderPrice}$`} />
            </Col>

            <Col sm={5}>
              <ValueCard text={formattedOrderDate} color='warning' />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default OrderCard;
