import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { CART_BACKGROUND_COLOR } from '../../Helpers/Constants';
import ItemsList from '../../Components/Information/ItemsList';
import ProductDisplayCard from '../../Components/Product/Cards/ProductDisplayCard';

const CartPage = () => {
  const products = useSelector((state) => state.cart.products);

  const itemsWithKeys = products.map((product) => {
    return { item: product, key: product._id };
  });

  return (
    <Container
      fluid
      className='me-3 justify-content-center align-items-center' // TODO: Change height to 100%, not vh
      style={{ minHeight: '100vh', backgroundColor: CART_BACKGROUND_COLOR }}
    >
      <ItemsList
        style={{ height: '100%' }}
        title='עגלת הקניות'
        items={itemsWithKeys}
        component={(item) => (
          <ProductDisplayCard
            item={item.item}
            initialQuantity={item.item.quantity}
          />
        )}
      />
    </Container>
  );
};

export default CartPage;
