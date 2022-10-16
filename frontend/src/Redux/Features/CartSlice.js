import { createSlice } from '@reduxjs/toolkit';

const findProductInCart = (cart, productToFind) => {
  const productInCart = cart.find(
    (cartProduct) => cartProduct._id === productToFind._id
  );

  return productInCart;
};

const isQuantityChangePossible = (product, quantity) =>
  quantity <= product.unitsInStock;

const EXAMPLE = [
  {
    quantity: 4,
    _id: '6342db61283f500161c1ad47',
    name: 'Galaxy S22',
    manufacturer: {
      _id: '6342da9ef28d82874a97e02e',
      name: 'Samsung',
    },
    image:
      'https://toppng.com/uploads/preview/advanced-technology-technology-icon-11550123584mn67laic5o.png',
    productionDate: '2022-10-09T12:03:48.000Z',
    addDate: '2022-10-09T12:03:48.000Z',
    price: 100,
    category: {
      _id: '6342cf9dd8b763247d922cc9',
      name: 'Smartphones',
    },
    unitsInStock: 100,
    __v: 0,
  },
  {
    quantity: 3,
    _id: '6342db4a283f500161c1ad42',
    name: 'Iphone',
    manufacturer: {
      _id: '6342cf00d8b763247d922cc4',
      name: 'Apple',
    },
    image:
      'https://toppng.com/uploads/preview/advanced-technology-technology-icon-11550123584mn67laic5o.png',
    productionDate: '2022-10-09T12:03:48.000Z',
    addDate: '2022-10-09T12:03:48.000Z',
    price: 100,
    category: {
      _id: '6342cf9dd8b763247d922cc9',
      name: 'Smartphones',
    },
    unitsInStock: 100,
    __v: 0,
  },
];

const cartSlice = createSlice({
  name: 'CartSlice',
  initialState: {
    products: [...EXAMPLE],
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
