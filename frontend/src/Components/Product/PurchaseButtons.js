import { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsFillCartPlusFill, BsStarFill, BsStar } from 'react-icons/bs';

const PurchaseButtons = ({ productId, price, unitsInStock }) => {
  const [currentAmount, setCurrentAmount] = useState(1);

  // TODO const isFavorite = productId in favoriteProducts;
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePurchase = (amount) => {
    // TODO Show Swal Alert on the side of the screen
    console.log(`${amount} of ${productId} were added to the cart`);
  };

  const handleFavorite = () => {
    // TODO Show Swal Alert on the side of the screen
    if (isFavorite) console.log(`${productId} was removed from my favorites!`);
    else console.log(`${productId} was added to my favorites!`);

    setIsFavorite(!isFavorite);
  };

  const handleAmountChange = (amountToAdd) => {
    setCurrentAmount(currentAmount + amountToAdd);
  };

  const increaseAmount = () => handleAmountChange(1);
  const decreaseAmount = () => handleAmountChange(-1);

  const currentPrice = currentAmount * price;
  const isMinAmount = currentAmount === 1;
  const isMaxAmount = currentAmount === unitsInStock;

  return (
    <>
      <Row className='d-flex justify-content-center text-center align-items-center'>
        <Col sm={5}>
          <Button
            style={{ width: '100%' }}
            disabled={isMinAmount}
            onClick={decreaseAmount}
            variant='danger'
            className='shadow d-flex justify-content-center text-center align-items-center'
          >
            <AiOutlineMinus />
          </Button>
        </Col>

        <Col sm={2}>
          <strong>{currentAmount}</strong>
        </Col>

        <Col sm={5}>
          <Button
            style={{ width: '100%' }}
            disabled={isMaxAmount}
            onClick={increaseAmount}
            variant='primary'
            className='shadow d-flex justify-content-center text-center align-items-center'
          >
            <AiOutlinePlus />
          </Button>
        </Col>
      </Row>

      <Row className='mt-2'>
        <Col sm={8}>
          <Button
            onClick={() => handlePurchase(currentAmount)}
            variant='success'
            style={{ width: '100%' }}
            className='shadow d-flex justify-content-between align-items-center'
          >
            <strong>{currentPrice}$</strong>
            <BsFillCartPlusFill />
          </Button>
        </Col>

        <Col sm={4} className='ps-0'>
          <Button
            style={{ width: '100%', height: '100%' }}
            className='shadow text-center d-flex justify-content-center align-items-center'
            variant='warning'
            onClick={handleFavorite}
          >
            {isFavorite ? <BsStarFill /> : <BsStar />}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default PurchaseButtons;
