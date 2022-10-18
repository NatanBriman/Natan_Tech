import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import ItemsContainer from '../../Components/Utils/Information/ItemsContainer';
import ProductDisplayCard from '../../Components/Product/Cards/ProductDisplayCard';

const FavoriteProductsPage = () => {
  const { favoriteProducts } = useSelector((state) => state.user.user);

  return (
    <Container className='my-2' fluid style={{ height: '100%' }}>
      <Row>
        <ItemsContainer
          items={favoriteProducts}
          title='מוצרים מועדפים'
          emptyText='🫤 אין לך מוצרים מועדפים עדיין'
          component={(favoriteProduct) => (
            <ProductDisplayCard item={favoriteProduct} isDisplayOnly />
          )}
        />
      </Row>
    </Container>
  );
};

export default FavoriteProductsPage;
