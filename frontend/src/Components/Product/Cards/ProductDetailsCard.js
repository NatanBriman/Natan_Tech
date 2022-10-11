import { Card, Col, Container, Image, Ratio, Row } from 'react-bootstrap';
import DetailRow from '../../Information/DetailRow';
import PurchaseButtons from '../PurchaseButtons';

const ProductDetailsCard = ({ product, details }) => {
  return (
    <Card bg='light' className='p-0 shadow mb-2 border border-2 border-primary'>
      <Card.Header>
        <Row>
          <Col sm={9}>
            <Card.Title>
              <h1>
                <b>{product.name}</b>
              </h1>
            </Card.Title>

            <Card.Subtitle>
              <h5>{product.manufacturer.name}</h5>
            </Card.Subtitle>
          </Col>

          <Col sm={3} className='p-0'>
            <Ratio>
              <Image src={product.image} alt='Product Image' rounded />
            </Ratio>
          </Col>
        </Row>
      </Card.Header>

      <Card.Body>
        <Container className='mt-2'>
          {details.map((detail) => (
            <DetailRow
              key={detail.text}
              detail={detail.detail}
              text={detail.text}
            />
          ))}
        </Container>
      </Card.Body>

      <Card.Footer>
        <Container>
          <PurchaseButtons
            price={product.price}
            unitsInStock={product.unitsInStock}
            productId={product._id}
          />
        </Container>
      </Card.Footer>
    </Card>
  );
};

export default ProductDetailsCard;