import { createSlice } from '@reduxjs/toolkit';

const findProductInCart = (cart, productToFind) => {
  const productInCart = cart.find(
    (cartProduct) => cartProduct._id === productToFind._id
  );

  return productInCart;
};

const isQuantityChangePossible = (product, quantityToAdd) =>
  product.quantity + quantityToAdd <= product.unitsInStock;

const cartSlice = createSlice({
  name: 'CartSlice',
  initialState: {
    products: [], // [ {product: {quantity}}, {product: {quantity}} ]
    confirmationCode: '',
  },
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload; // {product: {quantity}}

      const productInCart = findProductInCart(state.products, productToAdd);

      if (productInCart) {
        if (isQuantityChangePossible(productInCart, productToAdd.quantity))
          productInCart.quantity += productToAdd.quantity;
        // TODO Alert the user that the quantity change is not possible
        console.log(
          `${productInCart._id} changed quantity to ${productInCart.quantity}`
        );
      } else {
        state.products.push(productToAdd);

        console.log(`${productToAdd._id} was added to the cart`);
      }
    },
    removeProduct: (state, action) => {
      const productToRemove = action.payload;

      state.products.filter((product) => product._id !== productToRemove._id);

      console.log(`${productToRemove._id} was removed from the cart`);
    },
    changeQuantity: (state, action) => {
      const product = action.payload;

      const productInCart = findProductInCart(state.products, product);

      if (isQuantityChangePossible(productInCart, product.quantity))
        productInCart.quantity += product.quantity;

      console.log(
        `${productInCart._id} changed quantity to ${productInCart.quantity}`
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
