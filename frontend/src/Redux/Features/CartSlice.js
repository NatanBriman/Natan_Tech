import { createSlice } from '@reduxjs/toolkit';

const findProductInCart = (cart, productToFind) => {
  const productInCart = cart.find(
    (cartProduct) => cartProduct._id === productToFind._id
  );

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

      if (productInCart) {
        if (
          isQuantityChangePossible(
            productInCart,
            productInCart.quantity + productToAdd.quantity
          )
        ) {
          productInCart.quantity += productToAdd.quantity;

          console.log(
            `${productInCart._id} changed quantity to ${productInCart.quantity}`
          );
        }

        // TODO Alert the user that the quantity change is not possible
        else console.log(`${productInCart._id} can't change quantity`);
      } else {
        state.products.push(productToAdd);

        console.log(`${productToAdd._id} was added to the cart`);
      }
    },
    removeProduct: (state, action) => {
      const productIdToRemove = action.payload;

      state.products = state.products.filter(
        (product) => product._id !== productIdToRemove
      );

      console.log(`${productIdToRemove} was removed from the cart`);
    },
    changeQuantity: (state, action) => {
      const changedProduct = action.payload;

      const productInCart = findProductInCart(state.products, changedProduct);

      if (isQuantityChangePossible(productInCart, changedProduct.quantity))
        productInCart.quantity = changedProduct.quantity;

      console.log(
        `${productInCart._id} changed quantity to ${productInCart.quantity}`
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
