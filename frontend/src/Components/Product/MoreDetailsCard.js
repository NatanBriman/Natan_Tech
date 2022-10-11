import { Card, Container } from 'react-bootstrap';
import DetailRow from '../Information/DetailRow';
import PurchaseButtons from './PurchaseButtons';

const MoreDetailsCard = ({ product, details }) => {
  return (
    <Card bg='light' className='p-0 shadow mb-2 border border-2 border-primary'>
      <Card.Header className='text-center'>
        <Card.Title>
          <h1>
            <b>{product.name}</b>
          </h1>
        </Card.Title>

        <Card.Subtitle>
          <h5>{product.manufacturer.name}</h5>
        </Card.Subtitle>
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

export default MoreDetailsCard;
