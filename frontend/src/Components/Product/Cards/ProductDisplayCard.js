import { useState } from 'react';
import { Card, Image, Ratio, Row, Col } from 'react-bootstrap';
import { LITTLE_IN_STOCK } from '../../../Helpers/Constants';
import { getProductDetails } from '../../../Helpers/Helpers';
import ProductInfoModal from '../Modal/ProductInfoModal';
import QuantityButtons from '../Buttons/QuantityButtons';
import FavoriteButton from '../Buttons/FavoriteButton';
import PurchaseButton from '../Buttons/PurchaseButton';

const ProductDisplayCard = ({
  item,
  isPurchaseButton = false,
  initialQuantity = 1,
}) => {
  const [isShowModal, setIsShowProductInfo] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState(initialQuantity);

  const toggleModal = () => setIsShowProductInfo(!isShowModal);

  // TODO: REMOVE -2
  const isLeftLittleInStock = item.unitsInStock - 2 <= LITTLE_IN_STOCK;
  const productDetails = getProductDetails(item);

  return (
    <Card
      bg='light'
      className='clickable text-center p-0 m-2 border border-2 border-primary'
      style={{ width: '18%' }}
    >
      {isShowModal && (
        <ProductInfoModal
          details={productDetails}
          product={item}
          closeAction={toggleModal}
        />
      )}

      <Card.Header onClick={toggleModal}>
        <Ratio>
          <Card.Img src={item.image} alt='Product Image' />
        </Ratio>

        {isLeftLittleInStock && (
          <Card.ImgOverlay className='p-0' style={{ height: '50%' }}>
            <Ratio>
              <Image
                rounded
                src='Assets/Limited Stock.png'
                alt='Limited Stock'
              />
            </Ratio>
          </Card.ImgOverlay>
        )}
      </Card.Header>

      <Card.Body onClick={toggleModal}>
        <Card.Title>
          <h3>
            <b>{item.name}</b>
          </h3>
        </Card.Title>

        <Card.Subtitle>{item.manufacturer.name}</Card.Subtitle>
      </Card.Body>

      <Card.Footer>
        <Row className='d-flex justify-content-center text-center align-items-center'>
          <QuantityButtons
            product={item}
            currentQuantity={currentQuantity}
            setCurrentQuantity={setCurrentQuantity}
            isChangeCart={!isPurchaseButton}
          />

          <Row className='mt-2'>
            <FavoriteButton product={item} />
          </Row>
        </Row>

        {isPurchaseButton && (
          <Row className='mt-2'>
            <Col>
              <PurchaseButton
                product={item}
                currentQuantity={currentQuantity}
              />
            </Col>
          </Row>
        )}
      </Card.Footer>
    </Card>
  );
};

export default ProductDisplayCard;
