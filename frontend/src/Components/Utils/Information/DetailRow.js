import { Card, Col, Container, Row } from 'react-bootstrap';

const DetailRow = ({ detail, text }) => {
  return (
    <Card bg='secondary' className='shadow mb-2 border border-2 border-dark'>
      <Container>
        <Row className='text-center align-items-center'>
          <Col>
            <Card.Body>{detail}</Card.Body>
          </Col>
          <Col>
            <Card.Body>
              <b>{text}</b>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default DetailRow;
