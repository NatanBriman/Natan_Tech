import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import api from '../Api/Api';
import ProductCard from '../Components/Product/ProductCard';
import ReviewsCard from '../Components/Review/ReviewsCard';

const getAllProducts = async () => {
  const user = await api.products.getAllProducts();

  return user;
};

const StorePage = () => {
  const user = useSelector((state) => state.user);

  const [products, setProducts] = useState([]);

  const initializeProducts = async () => {
    const products = await getAllProducts();

    setProducts(products);
  };

  useEffect(() => {
    initializeProducts();
  }, []);

  return (
    <Container fluid style={{ width: '100%', height: '100%' }}>
      {/* <ReviewsList /> */}
      <Row className='mt-3 d-flex justify-content-center'>
        {products[2] && <ProductCard product={products[2]} />}
        {products[2] && <ProductCard product={products[1]} />}
        {products[2] && <ProductCard product={products[2]} />}
        {products[2] && <ProductCard product={products[0]} />}
        {products[2] && <ProductCard product={products[1]} />}
      </Row>
      <Row className='mt-3 d-flex justify-content-center'>
        {products[2] && <ProductCard product={products[2]} />}
        {products[2] && <ProductCard product={products[1]} />}
        {products[2] && <ProductCard product={products[2]} />}
        {products[2] && <ProductCard product={products[0]} />}
        {products[2] && <ProductCard product={products[1]} />}
      </Row>
    </Container>
  );
};

export default StorePage;
