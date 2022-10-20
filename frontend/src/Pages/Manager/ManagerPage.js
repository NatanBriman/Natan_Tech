import { Card, Col, Container, Row } from 'react-bootstrap';
import AddCategoryForm from './Forms/AddCategoryForm';
import AddManufacturer from './Forms/AddManufacturer';
import AddProductForm from './Forms/AddProductForm';

const ManagerPage = () => {
  return (
    <Container fluid className='mt-5 mb-2'>
      <Row>
        <Col sm={4}>
          <Card
            bg='light'
            className='shadow text-center border border-2 border-warning'
          >
            <Card.Header>
              <Card.Title as='h1'>
                <b>הוספת יצרן</b>
              </Card.Title>
            </Card.Header>

            <Card.Body>
              <AddManufacturer />
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card
            bg='light'
            className='shadow text-center border border-2 border-warning'
          >
            <Card.Header>
              <Card.Title as='h1'>
                <b>הוספת קטגוריה</b>
              </Card.Title>
            </Card.Header>

            <Card.Body>
              <AddCategoryForm />
            </Card.Body>
          </Card>
        </Col>

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
      </Row>
    </Container>
  );
};

export default ManagerPage;
