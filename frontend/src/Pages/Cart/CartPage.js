import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { WEBSITE_BACKGROUND_COLOR } from '../../Helpers/Constants';
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
      style={{ minHeight: '100vh', backgroundColor: WEBSITE_BACKGROUND_COLOR }}
    >
      <h1 className='display-1 text-center'>עגלת הקניות</h1>

      <ItemsList
        style={{ height: '100%' }}
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
