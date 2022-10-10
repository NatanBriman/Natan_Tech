import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const CategoryProducts = ({ categoryName, products }) => {
  return (
    <div className='mb-2'>
      <Col className='d-flex justify-content-between'>
        <h1>{categoryName}</h1>

        <h1>{products.length}</h1>
      </Col>

      <Row
        key={categoryName}
        className='slider border-bottom border-top border-2 border-secondary'
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default CategoryProducts;
