import { useSelector } from 'react-redux';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { WEBSITE_BACKGROUND_COLOR } from '../../Helpers/Constants';
import ProductSummaryRow from '../../Components/Product/Cards/ProductSummaryRow';
import { BsCartCheck } from 'react-icons/bs';
import api from '../../Api/Api';

const addOrder = async (products, userId) => {
  const confirmationCode = await api.orders.addOrder(products, userId);

  return confirmationCode;
};

// TODO Create cart total price
// TODO Create empty cart button
const CartPage = () => {
  const products = useSelector((state) => state.cart.products);
  const { _id } = useSelector((state) => state.user.user);

  const handlePurchase = async () => {
    const confirmationCode = await addOrder(products, _id);

    console.log(confirmationCode);
  };

  const isNoProducts = products.length === 0;

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
        <Row>
          <Card
            bg='light'
            style={{ width: '100%', height: '100%' }}
            className='me-3 my-2 p-0 shadow border border-2 border-success justify-content-center align-items-center'
          >
            <Card.Header
              className='text-center shadow'
              style={{ width: '100%' }}
            >
              <Card.Title as='h1'>
                <b>עגלת הקניות</b>
              </Card.Title>
            </Card.Header>

            <Card.Body style={{ width: '100%' }}>
              {isNoProducts && (
                <h2 className='text-center'>🫤 עגלת הקניות שלך ריקה</h2>
              )}

              <Container fluid>
                {products.map((product) => (
                  <ProductSummaryRow key={product._id} product={product} />
                ))}
              </Container>
            </Card.Body>
          </Card>
        </Row>

        {!isNoProducts && (
          <Row>
            <Col className='d-flex justify-content-center align-items-center'>
              <Button
                onClick={handlePurchase}
                style={{ color: 'black' }}
                className='mt-5 d-flex align-items-center border border-dark border-3 shadow'
              >
                <h1 className='display-5'>מעבר לתשלום</h1>
                <h1 className='ms-2 display-5'>
                  <BsCartCheck />
                </h1>
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </Container>
  );
};

export default CartPage;
