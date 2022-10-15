import { IoStorefrontSharp } from 'react-icons/io5';
import { BsCartFill } from 'react-icons/bs';
import { VscHistory } from 'react-icons/vsc';
import ProtectedRoute from '../Router/ProtectedRoute';
import StorePage from '../Pages/Store/StorePage';
import CartPage from '../Pages/Cart/CartPage';
import OrdersPage from '../Pages/Orders/OrdersPage';

export const WEBSITE_TITLE = 'נתן טכנולוגיות';
export const WEBSITE_SUBTITLE = 'המקום היחיד לכל פתרונות הטכנולוגיה';
export const HOME_PAGE_BACKGROUND_COLOR = '#992be3';
export const WEBSITE_BACKGROUND_COLOR = '#b2bdd1';
export const SIDEBAR_BACKGROUND_COLOR = '#375791';
export const BARCODE_LINK = 'https://r.mtdv.me/watch?v=Natans-Tech-Song';

export const USERNAME_INPUT_PROPS = {
  required: true,
  type: 'text',
  placeholder: 'example_new',
};

export const IMAGE_INPUT_PROPS = {
  type: 'image',
  placeholder: 'בחירת תמונת פרופיל',
};

export const EMAIL_INPUT_PROPS = {
  required: true,
  type: 'email',
  placeholder: 'example@gmail.com',
};

export const PASSWORD_INPUT_PROPS = {
  required: true,
  type: 'password',
  placeholder: 'Example1234',
};

export const HOME_ROUTE = '/home';
export const STORE_ROUTE = '/store';
export const PROFILE_ROUTE = '/profile';
export const ORDERS_ROUTE = '/orders';
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
    text: 'עגלת הקניות',
    icon: <BsCartFill style={{ height: '100%', width: '100%' }} />,
  },
  {
    path: ORDERS_ROUTE,
    element: (
      // <ProtectedRoute>
      <OrdersPage />
      // </ProtectedRoute>
    ),
    text: 'ההזמנות שלי',
    icon: <VscHistory style={{ height: '100%', width: '100%' }} />,
  },
];
