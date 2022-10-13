import { Card, Row, Ratio, Image, Col, Button } from 'react-bootstrap';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { MdOutlineModeEdit } from 'react-icons/md';

const ProductSummaryCard = ({ product }) => {
  return (
    <Row className='mb-3'>
      <Col sm={1} className='d-flex justify-content-center align-items-center'>
        <Button
          variant='danger'
          style={{ height: '100%', width: '100%' }}
          className='p-1 ms-3 border border-dark border-2 shadow text-center'
        >
          <RiDeleteBack2Line
            style={{ color: 'black', height: '100%', width: '100%' }}
          />
        </Button>
      </Col>

      <Col sm={10}>
        <Card bg='light' className='shadow border border-2 border-primary'>
          <Row>
            <Col sm={2} className=''>
              <Ratio
                style={{ height: '8em', width: '8em' }}
                className='shadow border-right border-dark'
              >
                <Image rounded src={product.image} alt='Product Image' />
              </Ratio>
            </Col>

            <Col sm={10} className='ps-0'>
              <Card.Body className='p-1'>
                <Card.Title>
                  <h1>
                    <b>{product.name}</b>
                  </h1>
                </Card.Title>

                <Card.Subtitle>
                  <h4>{product.manufacturer.name}</h4>
                </Card.Subtitle>

                <Card.Text>
                  <h6>{product.price}$</h6>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col sm={1} className='d-flex justify-content-center align-items-center'>
        <Button
          style={{ height: '100%', width: '80%' }}
          className='p-1 me-3 border border-2 border-dark shadow text-center'
        >
          <MdOutlineModeEdit
            style={{ color: 'black', height: '100%', width: '100%' }}
          />
        </Button>
      </Col>
    </Row>
  );
};

export default ProductSummaryCard;
