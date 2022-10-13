import { IoStorefrontSharp } from 'react-icons/io5';
import { BsCartFill } from 'react-icons/bs';
import ProtectedRoute from '../Router/ProtectedRoute';
import StorePage from '../Pages/Store/StorePage';
import CartPage from '../Pages/Cart/CartPage';

export const WEBSITE_TITLE = 'נתן טכנולוגיות';
export const WEBSITE_SUBTITLE = 'המקום היחיד לכל פתרונות הטכנולוגיה';
export const LOGIN_PAGE_BACKGROUND_COLOR = '#992be3';
export const STORE_BACKGROUND_COLOR = '#b2bdd1';
export const SIDEBAR_BACKGROUND_COLOR = '#375791';
export const CART_BACKGROUND_COLOR = '#186e25';

export const EMAIL_INPUT_PROPS = {
  autoFocus: true,
  required: true,
  type: 'email',
  placeholder: 'example@gmail.com',
};

export const PASSWORD_INPUT_PROPS = {
  required: true,
  type: 'password',
  placeholder: 'example1234',
};

export const LOGIN_ROUTE = '/login';
export const REGISTRATION_ROUTE = '/registration';
export const STORE_ROUTE = '/store';
export const PROFILE_ROUTE = '/profile';
export const CART_ROUTE = '/cart';
export const REVIEWS_ROUTE = '/reviews';
export const MANAGER_ROUTE = '/manager';

export const LITTLE_IN_STOCK = 5;

export const MAX_RATING = 5;

// TODO: Protect routes
export const ROUTES = [
  {
    path: STORE_ROUTE,
    element: (
      // <ProtectedRoute>
      <StorePage />
      // </ProtectedRoute>
    ),
    text: 'חנות',
    icon: <IoStorefrontSharp style={{ height: '100%', width: '100%' }} />,
  },
  {
    path: CART_ROUTE,
    element: (
      // <ProtectedRoute>
      <CartPage />
      // </ProtectedRoute>
    ),
    text: 'עגלת קניות',
    icon: <BsCartFill style={{ height: '100%', width: '100%' }} />,
  },
];
