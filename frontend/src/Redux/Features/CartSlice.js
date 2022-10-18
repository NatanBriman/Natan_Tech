import { createSlice } from '@reduxjs/toolkit';
import { showAlert } from '../../Helpers/Helpers';

const byId =
  (productToFind, equal = true) =>
  (product) =>
    equal
      ? product._id === productToFind._id
      : product._id !== productToFind._id;

const findProductInCart = (cart, productToFind) => {
  const productInCart = cart.find(byId(productToFind));

  return productInCart;
};

const isQuantityChangePossible = (product, quantity) =>
  quantity <= product.unitsInStock;

const cartSlice = createSlice({
  name: 'CartSlice',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload;

      const productInCart = findProductInCart(state.products, productToAdd);

      if (!productInCart) state.products.push(productToAdd);
      else if (
        isQuantityChangePossible(
          productInCart,
          productInCart.quantity + productToAdd.quantity
        )
      )
        productInCart.quantity += productToAdd.quantity;
      else showAlert('warning', 'לא ניתן להוסיף עוד מהמוצר');
    },
    removeProduct: (state, action) => {
      const productToRemove = action.payload;

      const updatedProducts = state.products.filter(
        byId(productToRemove, false)
      );

      state.products = updatedProducts;
    },
    changeQuantity: (state, action) => {
      const changedProduct = action.payload;

      const productInCart = findProductInCart(state.products, changedProduct);

      if (isQuantityChangePossible(productInCart, changedProduct.quantity))
        productInCart.quantity = changedProduct.quantity;
      else showAlert('warning', 'לא ניתן להוסיף עוד מהמוצר');
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
