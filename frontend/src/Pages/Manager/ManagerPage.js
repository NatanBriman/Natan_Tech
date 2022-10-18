import { Card, Col, Container, Row } from 'react-bootstrap';
import AddProductForm from './AddProductForm';

const ManagerPage = () => {
  return (
    <Container fluid className='mt-5'>
      <Row>
        <Col sm={4}>
          <Card
            bg='light'
            className='shadow text-center border border-2 border-warning'
          >
            <Card.Header>
              <Card.Title as='h1'>
                <b>הוספת מוצר</b>
              </Card.Title>
            </Card.Header>

            <Card.Body>
              <AddProductForm />
            </Card.Body>
          </Card>
        </Col>

        {/* <Col sm={8}></Col> */}
      </Row>
    </Container>
  );
};

export default ManagerPage;
