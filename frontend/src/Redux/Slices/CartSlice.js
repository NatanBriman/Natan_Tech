import { createSlice } from '@reduxjs/toolkit';

const findProductInCart = (cart, productToFind) => {
  const productInCart = cart.find(
    (cartProduct) => cartProduct.product._id === productToFind._id
  );

  return productInCart;
};

const isQuantityChangePossible = (product, quantity) =>
  product.quantity + quantity <= product.unitsInStock;

const cartSlice = createSlice({
  name: 'CartSlice',
  initialState: {
    products: [], // [ {product, quantity}, {product, quantity} ]
    confirmationCode: '',
  },
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload;

      const productInCart = findProductInCart(
        state.products,
        productToAdd.product
      );

      if (productInCart !== undefined) {
        if (isQuantityChangePossible(productInCart, productToAdd.quantity))
          productInCart.quantity += productToAdd.quantity;
        // TODO Alert the user that the quantity change is not possible
        console.log(
          `${productToAdd.product._id} changed quantity to ${productInCart.quantity}`
        );
      } else {
        state.products.push(productToAdd);

        console.log(`${productToAdd.product._id} was added to the cart`);
      }
    },
    removeProduct: (state, action) => {
      const productToRemove = action.payload;

      state.products.filter(
        (product) => product.product._id !== productToRemove.product._id
      );
    },
    changeQuantity: (state, action) => {
      const { product, quantity } = action.payload;

      const productInCart = findProductInCart(state.products, product);

      if (isQuantityChangePossible(productInCart, quantity))
        productInCart.quantity += quantity;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
