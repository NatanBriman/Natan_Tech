import { useState } from 'react';
import { Card, Col, Collapse, Row } from 'react-bootstrap';
import { AiOutlineDown } from 'react-icons/ai';
import { getDateString } from '../../Helpers/Helpers';
import { QR_CODE_LINK } from '../../Helpers/Constants';
import QRCode from 'react-qr-code';
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
      <Row className='d-flex justify-content-between align-items-center'>
        <Col sm={2}>
          <QRCode
            value={QR_CODE_LINK}
            size={100}
            title={order._id}
            className='shadow text-center rounded m-1'
          />
        </Col>

        <Col sm={3}>
          <Col>
            <ValueBox
              text={<bdi>{order.products.length} מוצרים</bdi>}
              color='info'
            />
          </Col>
        </Col>

        <Col sm={3}>
          <ValueBox text={`סה"כ ${formattedOrderPrice}$`} />
        </Col>

        <Col sm={3}>
          <ValueBox text={formattedOrderDate} color='danger' />
        </Col>

        <Col sm={1}>
          <AiOutlineDown
            style={{
              height: '50%',
              width: '50%',
              transform: isShowDetails ? 'rotate(180deg)' : '',
              transition: '.4s',
            }}
          />
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
