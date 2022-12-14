import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../Api/Api';
import { showAlert } from '../../../Helpers/Helpers';
import { userActions } from '../../../Redux/Features/User/UserSlice';

const toggleProductInFavorites = async (userId, productId) => {
  try {
    await api.users.toggleFavoriteProduct(userId, productId);
  } catch (error) {
    showAlert('error', '!אופס, קרתה לנו בעיה');
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

    if (isFavorite) {
      dispatch(removeFavoriteProduct(product));
      showAlert('warning', 'המוצר הוסר מהמועדפים');
    } else {
      dispatch(addFavoriteProduct(product));
      showAlert('success', 'המוצר נוסף למועדפים');
    }

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
