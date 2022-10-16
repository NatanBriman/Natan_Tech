import { isEmpty } from 'lodash';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../Api/Api';
import { userActions } from '../../../Redux/Features/UserSlice';

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
  const isInFavoriteProducts = !isEmpty(favoriteProducts.find(isProductId));
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
