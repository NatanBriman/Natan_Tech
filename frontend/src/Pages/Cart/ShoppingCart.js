import { Card, Col, Row } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import DeleteButton from '../../Components/Delete/DeleteButton';
import ProductSummaryRow from '../../Components/Product/Cards/ProductSummaryRow';
import ActionButton from '../../Components/Utils/ActionButton';
import ValueCard from '../../Components/Utils/ValueCard';
import ItemsContainer from '../../Components/Utils/ItemsContainer';

const ShoppingCart = ({ products, deleteProduct, deleteAllProducts }) => {
  const isNoProducts = products.length === 0;
  const totalPrice = products.reduce(
    (totalPrice, product) => totalPrice + product.price * product.quantity,
    0
  );

  return (
    <ItemsContainer
      items={products}
      title='עגלת הקניות'
      emptyText='🫤 עגלת הקניות שלך ריקה'
      component={(product) => (
        <Row className='mb-3' key={product._id}>
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

          <Col sm={11}>
            <ProductSummaryRow product={product} />
          </Col>
        </Row>
      )}
    >
      {!isNoProducts && (
        <Card.Footer style={{ width: '100%' }}>
          <Row className='d-flex align-items-center'>
            <Col sm={10} className='d-flex'>
              <ActionButton
                onClick={deleteAllProducts}
                color='danger'
                text='מחיקת העגלה'
                icon={<BsTrash />}
                textClass='display-6'
              />
            </Col>

            <Col sm={2}>
              <ValueCard text={`${totalPrice.toLocaleString()}$`} />
            </Col>
          </Row>
        </Card.Footer>
      )}
    </ItemsContainer>
  );
};

export default ShoppingCart;
