import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import { WEBSITE_BACKGROUND_COLOR } from '../../Helpers/Constants';
import ItemsList from '../../Components/Utils/ItemsList';
import ProductDisplayCard from '../../Components/Product/Cards/ProductDisplayCard';

const FavoriteProductsPage = () => {
  const { favoriteProducts } = useSelector((state) => state.user.user);

  const isNoProducts = isEmpty(favoriteProducts);

  const items = favoriteProducts.map((favoriteProduct) => {
    return { ...favoriteProduct, key: favoriteProduct._id };
  });

  return (
    <Container
      fluid
      className='me-5 d-flex justify-content-center align-items-center'
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: WEBSITE_BACKGROUND_COLOR,
      }}
    >
      <Container className='my-2' fluid style={{ height: '100%' }}>
        <ItemsList
          title='מוצרים מועדפים'
          items={items}
          isShowAmount
          component={(favoriteProduct) => (
            <ProductDisplayCard item={favoriteProduct} isDisplayOnly />
          )}
        />
      </Container>

      {/* <DecisionModal
        isShow={isShowPurchaseModal}
        closeAction={toggleModal}
        text='תשלום'
      >
        <ActionButton
          onClick={handlePurchase}
          text='אישור תשלום'
          icon={<AiOutlineCheck />}
          color='danger'
        />

        <ActionButton onClick={toggleModal} text='לא' icon={<BsArrowRight />} />
      </DecisionModal> */}
    </Container>
  );
};

export default FavoriteProductsPage;
