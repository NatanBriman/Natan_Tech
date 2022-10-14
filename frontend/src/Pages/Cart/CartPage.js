import { useSelector } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import { WEBSITE_BACKGROUND_COLOR } from '../../Helpers/Constants';
import ItemsList from '../../Components/Information/ItemsList';
import ProductDisplayCard from '../../Components/Product/Cards/ProductDisplayCard';
import ProductSummaryRow from '../../Components/Product/Cards/ProductSummaryRow';

const CartPage = () => {
  const products = useSelector((state) => state.cart.products);

  // const itemsWithKeys = products.map((product) => {
  //   return { item: product, key: product._id };
  // });

  const onDelete = (productId) => {
    console.log(`${productId} DELETED`);
  };

  return (
    <Container
      fluid
      className='me-5 justify-content-center'
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: WEBSITE_BACKGROUND_COLOR,
      }}
    >
      <Card
        bg='light'
        style={{ width: '100%' }}
        className='me-3 my-2 p-0 shadow border border-2 border-success justify-content-center align-items-center'
      >
        <Card.Header className='text-center shadow' style={{ width: '100%' }}>
          <Card.Title as='h1'>
            <b>עגלת הקניות</b>
          </Card.Title>
        </Card.Header>

        <Card.Body style={{ width: '100%' }}>
          <Container fluid>
            {products.map((product) => (
              <ProductSummaryRow
                key={product._id}
                product={product}
                onDelete={onDelete}
              />
            ))}
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CartPage;

// <Container
//   fluid
//   className='me-3 justify-content-center align-items-center' // TODO: Change height to 100%, not vh
//   style={{ minHeight: '100vh', backgroundColor: WEBSITE_BACKGROUND_COLOR }}
// >
//   <h1 className='display-1 text-center'>עגלת הקניות</h1>

//   <ItemsList
//     style={{ height: '100%' }}
//     items={itemsWithKeys}
//     component={(item) => (
//       <ProductDisplayCard
//         item={item.item}
//         initialQuantity={item.item.quantity}
//       />
//     )}
//   />
// </Container>
