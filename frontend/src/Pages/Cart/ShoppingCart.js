import { useDispatch } from 'react-redux';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import { cartActions } from '../../Redux/Features/CartSlice';
import DeleteButton from '../../Components/Delete/DeleteButton';
import ProductSummaryRow from '../../Components/Product/Cards/ProductSummaryRow';
import ActionButton from '../../Components/Utils/ActionButton';
import ValueCard from '../../Components/Utils/ValueCard';

const ShoppingCart = ({ products }) => {
  const dispatch = useDispatch();

  const deleteProduct = (productId) => {
    const { removeProduct } = cartActions;

    dispatch(removeProduct(productId));
  };

  const deleteAllProducts = () =>
    products.map((product) => deleteProduct(product._id));

  const totalPrice = products.reduce(
    (totalPrice, product) => totalPrice + product.price * product.quantity,
    0
  );
  const isNoProducts = products.length === 0;

  return (
    <Card
      bg='secondary'
      style={{ width: '100%', height: '100%' }}
      className='mt-2 p-0 shadow border border-2 border-success'
    >
      <Card.Header className='text-center' style={{ width: '100%' }}>
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
            <Row className='mb-3' key={product._id}>
              <Col sm={11}>
                <ProductSummaryRow product={product} />
              </Col>

              <Col
                sm={1}
                className='p-0 d-flex align-items-center justify-content-center'
              >
                <DeleteButton
                  withModal
                  deleteAction={() => deleteProduct(product._id)}
                  text='?להוריד מהעגלה'
                />
              </Col>
            </Row>
          ))}
        </Container>
      </Card.Body>

      {!isNoProducts && (
        <Card.Footer style={{ width: '100%' }}>
          <Row className='d-flex align-items-center'>
            <Col sm={2}>
              <ValueCard text={`${totalPrice.toLocaleString()}$`} />
            </Col>

            <Col sm={10} className='d-flex justify-content-end'>
              <ActionButton
                onClick={deleteAllProducts}
                color='danger'
                text='מחיקת העגלה'
                icon={<BsTrash />}
                textClass='display-6'
              />
            </Col>
          </Row>
        </Card.Footer>
      )}
    </Card>
  );
};

export default ShoppingCart;
