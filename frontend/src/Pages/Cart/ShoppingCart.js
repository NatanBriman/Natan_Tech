import { Card, Col, Row } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import DecisionButton from '../../Components/Utils/Buttons/DecisionButton';
import ProductSummaryRow from '../../Components/Product/Cards/ProductSummaryRow';
import ValueBox from '../../Components/Utils/Information/ValueBox';
import ItemsContainer from '../../Components/Utils/Information/ItemsContainer';

const ShoppingCart = ({ products, deleteProduct, deleteAllProducts }) => {
  const isNoProducts = products.length === 0;
  const totalPrice = products.reduce(
    (totalPrice, product) => totalPrice + product.price * product.quantity,
    0
  );

  const productSummaryRowWithDeleteButton = (product) => (
    <Row className='mb-3' key={product._id}>
      <Col
        sm={1}
        className='p-0 d-flex align-items-center justify-content-center'
      >
        <DecisionButton
          action={() => deleteProduct(product)}
          modalText='?להוריד מהעגלה'
          icon={<BsTrash />}
        />
      </Col>

      <Col sm={11}>
        <ProductSummaryRow product={product} />
      </Col>
    </Row>
  );

  return (
    <ItemsContainer
      items={products}
      title='עגלת הקניות'
      emptyText='🫤 עגלת הקניות שלך ריקה'
      component={productSummaryRowWithDeleteButton}
    >
      {!isNoProducts && (
        <Card.Footer style={{ width: '100%' }}>
          <Row className='d-flex'>
            <Col>
              <DecisionButton
                action={deleteAllProducts}
                text='מחיקת העגלה'
                modalText='?האם למחוק את כל העגלה'
                icon={<BsTrash />}
              />
            </Col>

            <Col sm={2}>
              <ValueBox text={`${totalPrice.toLocaleString()}$`} />
            </Col>
          </Row>
        </Card.Footer>
      )}
    </ItemsContainer>
  );
};

export default ShoppingCart;
