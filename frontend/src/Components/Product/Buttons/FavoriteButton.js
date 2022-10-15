import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsStarFill, BsStar } from 'react-icons/bs';

const FavoriteButton = ({ product }) => {
  // TODO Each product will have 'isFavorite' property
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    // TODO Show Swal Alert on the side of the screen
    if (isFavorite)
      console.log(`${product._id} was removed from my favorites!`);
    else console.log(`${product._id} was added to my favorites!`);

    setIsFavorite(!isFavorite);
  };

  return (
    <Button
      style={{ width: '100%', height: '100%' }}
      className='shadow border border-dark text-center d-flex justify-content-center align-items-center'
      variant='warning'
      onClick={handleFavorite}
    >
      {isFavorite ? <BsStarFill /> : <BsStar />}
    </Button>
  );
};

export default FavoriteButton;
