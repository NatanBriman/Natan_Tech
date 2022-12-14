import { useState } from 'react';
import { Card, Image, Ratio } from 'react-bootstrap';
import { LITTLE_IN_STOCK } from '../../../Helpers/Constants';
import { QuantityProvider } from '../../../Pages/QuantityContext';
import ProductButtons from '../Buttons/ProductButtons';
import ProductInfoModal from '../Modal/ProductInfoModal';

const ProductDisplayCard = ({
  item,
  isPurchaseButton = false,
  initialQuantity,
  isDisplayOnly = false,
}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState(initialQuantity);

  const toggleModal = () => setIsShowModal((isShow) => !isShow);

  const isLeftLittleInStock = item.unitsInStock <= LITTLE_IN_STOCK;

  return (
    <QuantityProvider value={[currentQuantity, setCurrentQuantity]}>
      <Card
        bg='secondary'
        className='clickable shadow m-2 text-center p-0 border border-2 border-info'
        style={{ width: '18%' }}
      >
        <Card.Header onClick={toggleModal}>
          <Ratio>
            <Card.Img src={item.image} alt='Product Image' />
          </Ratio>

          {isLeftLittleInStock && (
            <Card.ImgOverlay className='p-0' style={{ height: '50%' }}>
              <Ratio>
                <Image rounded src='Assets/Limited Stock.png' alt='Limited Stock' />
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
          <ProductButtons
            isDisplayOnly={isDisplayOnly}
            product={item}
            isPurchaseButton={isPurchaseButton}
          />
        </Card.Footer>
      </Card>

      {isShowModal && (
        <ProductInfoModal
          closeAction={toggleModal}
          product={item}
          isPurchaseButton={isPurchaseButton}
          isDisplayOnly={isDisplayOnly}
        />
      )}
    </QuantityProvider>
  );
};

export default ProductDisplayCard;
