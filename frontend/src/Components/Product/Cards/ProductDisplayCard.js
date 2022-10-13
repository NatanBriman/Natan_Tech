import { useState } from 'react';
import { StoreProvider } from '../../../Pages/Store/StoreContext';
import { Card, Image, Ratio } from 'react-bootstrap';
import { LITTLE_IN_STOCK } from '../../../Helpers/Constants';
import ProductInfoModal from '../Modal/ProductInfoModal';
import ProductButtons from '../Buttons/ProductButtons';

const ProductDisplayCard = ({
  item,
  isPurchaseButton = false,
  initialQuantity,
}) => {
  const [isShowModal, setIsShowProductInfo] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState(initialQuantity);

  const toggleModal = () => setIsShowProductInfo(!isShowModal);

  const isLeftLittleInStock = item.unitsInStock <= LITTLE_IN_STOCK;

  return (
    <StoreProvider value={[currentQuantity, setCurrentQuantity]}>
      <Card
        bg='light'
        className='clickable m-2 text-center p-0 border border-2 border-primary'
        style={{ width: '18%' }}
      >
        {isShowModal && (
          <ProductInfoModal
            closeAction={toggleModal}
            product={item}
            isPurchaseButton={isPurchaseButton}
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
          <ProductButtons product={item} isPurchaseButton={isPurchaseButton} />
        </Card.Footer>
      </Card>
    </StoreProvider>
  );
};

export default ProductDisplayCard;
