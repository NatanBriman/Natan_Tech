import { useState } from 'react';
import { Card, Image, Ratio } from 'react-bootstrap';
import { LITTLE_IN_STOCK } from '../../../Helpers/Constants';
import { getProductDetails } from '../../../Helpers/Helpers';
import ProductInfoModal from '../Modal/ProductInfoModal';
import PurchaseButtons from '../PurchaseButtons';

const ProductDisplayCard = ({ product }) => {
  const [isShowModal, setIsShowProductInfo] = useState(false);

  const toggleModal = () => setIsShowProductInfo(!isShowModal);

  // TODO: REMOVE -2
  const isLeftLittleInStock = product.unitsInStock - 2 <= LITTLE_IN_STOCK;
  const productDetails = getProductDetails(product);

  return (
    <Card
      bg='light'
      className='clickable text-center p-0 m-2 border border-2 border-primary'
      style={{ width: '18%' }}
    >
      {isShowModal && (
        <ProductInfoModal
          details={productDetails}
          product={product}
          closeAction={toggleModal}
        />
      )}

      <Card.Header onClick={toggleModal}>
        <Ratio>
          <Card.Img src={product.image} alt='Product Image' />
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
            <b>{product.name}</b>
          </h3>
        </Card.Title>

        <Card.Subtitle>{product.manufacturer.name}</Card.Subtitle>
      </Card.Body>

      <Card.Footer>
        <PurchaseButtons
          price={product.price}
          unitsInStock={product.unitsInStock}
          productId={product._id}
        />
      </Card.Footer>
    </Card>
  );
};

export default ProductDisplayCard;
