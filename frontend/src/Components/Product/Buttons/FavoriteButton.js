import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { userActions } from '../../../Redux/Features/UserSlice';
import api from '../../../Api/Api';

const toggleProductInFavorites = async (userId, productId) => {
  try {
    await api.users.toggleFavoriteProduct(userId, productId);
  } catch (error) {
    // TODO Show Swal Alert on the side of the screen
  }
};

const FavoriteButton = ({ product }) => {
  const dispatch = useDispatch();
  const { _id, favoriteProducts } = useSelector((state) => state.user.user);

  const isProductId = (favoriteProduct) => favoriteProduct._id === product._id;
  const isInFavoriteProducts = favoriteProducts.find(isProductId);
  const [isFavorite, setIsFavorite] = useState(isInFavoriteProducts);

  const handleFavorite = () => {
    const { addFavoriteProduct, removeFavoriteProduct } = userActions;

    toggleProductInFavorites(_id, product._id);

    if (isFavorite) dispatch(removeFavoriteProduct(product));
    else dispatch(addFavoriteProduct(product));

    setIsFavorite((isFavorite) => !isFavorite);
  };

  return (
    <Button
      style={{ width: '100%', height: '100%', color: 'black' }}
      className='shadow border border-2 border-warning text-center d-flex justify-content-center align-items-center'
      variant='outline-warning'
      onClick={handleFavorite}
    >
      <div className='me-1'>מועדפים</div>
      {isFavorite ? <BsStarFill /> : <BsStar />}
    </Button>
  );
};

export default FavoriteButton;
