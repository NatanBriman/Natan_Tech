import { useState } from 'react';
import { Card, Image, Ratio } from 'react-bootstrap';
import { LITTLE_IN_STOCK } from '../../Helpers/Constants';
import { getProductMoreDetails } from '../../Helpers/Helpers';
import MoreDetailsModal from './MoreDetailsModal';
import PurchaseButtons from './PurchaseButtons';

const ProductCard = ({ product }) => {
  const [isShowMoreDetails, setIsShowMoreDetails] = useState(false);

  const showModal = () => setIsShowMoreDetails(true);

  const isLeftLittleInStock = product.unitsInStock - 2 <= LITTLE_IN_STOCK;
  const moreDetails = getProductMoreDetails(product);

  return (
    <Card
      bg='light'
      className='clickable text-center m-2 p-0 border border-2 border-primary'
      style={{ width: '18%' }}
    >
      {isShowMoreDetails && (
        <MoreDetailsModal
          details={moreDetails}
          product={product}
          closeAction={setIsShowMoreDetails}
        />
      )}

      <Card.Header onClick={showModal}>
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

      <Card.Body onClick={showModal}>
        <Card.Title>
          <h3>
            <strong>{product.name}</strong>
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

export default ProductCard;
