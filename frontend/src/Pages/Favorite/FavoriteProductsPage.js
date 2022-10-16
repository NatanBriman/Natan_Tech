import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { WEBSITE_BACKGROUND_COLOR } from '../../Helpers/Constants';
import ItemsContainer from '../../Components/Utils/ItemsContainer';
import ProductDisplayCard from '../../Components/Product/Cards/ProductDisplayCard';

const FavoriteProductsPage = () => {
  const { favoriteProducts } = useSelector((state) => state.user.user);

  return (
    <Container
      fluid
      className='me-5 d-flex justify-content-center'
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: WEBSITE_BACKGROUND_COLOR,
      }}
    >
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
    </Container>
  );
};

export default FavoriteProductsPage;
