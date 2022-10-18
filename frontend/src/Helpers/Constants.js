import { IoStorefrontSharp } from 'react-icons/io5';
import { BsCartFill, BsStarFill } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';
import { VscHistory } from 'react-icons/vsc';
import StorePage from '../Pages/Store/StorePage';
import CartPage from '../Pages/Cart/CartPage';
import OrdersPage from '../Pages/Orders/OrdersPage';
import FavoriteProductsPage from '../Pages/Favorite/FavoriteProductsPage';
import ManagerPage from '../Pages/Manager/ManagerPage';

export const WEBSITE_TITLE = 'נתן טכנולוגיות';
export const WEBSITE_SUBTITLE = 'המקום היחיד לכל פתרונות הטכנולוגיה';
export const HOME_PAGE_BACKGROUND_COLOR = '#992be3';
export const WEBSITE_BACKGROUND_COLOR = '#b2bdd1';
export const NAVBAR_BACKGROUND_COLOR = '#375791';
export const QR_CODE_LINK = 'https://r.mtdv.me/watch?v=Natans-Tech-Song';
export const PROFILE_IMAGES_PATH = 'Assets/Profile Images';

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
export const FAVORITES_ROUTE = '/favorites';
export const REVIEWS_ROUTE = '/reviews';
export const MANAGER_ROUTE = '/manager';

export const LITTLE_IN_STOCK = 5;
export const MAX_RATING = 5;

export const ROUTES = [
  {
    path: STORE_ROUTE,
    element: <StorePage />,
    text: 'חנות',
    icon: <IoStorefrontSharp style={{ height: '100%', width: '100%' }} />,
    isManger: false,
    public: false,
  },
  {
    path: CART_ROUTE,
    element: <CartPage />,
    text: 'עגלת הקניות',
    icon: <BsCartFill style={{ height: '100%', width: '100%' }} />,
    isManger: false,
    public: false,
  },
  {
    path: ORDERS_ROUTE,
    element: <OrdersPage />,
    text: 'ההזמנות שלי',
    icon: <VscHistory style={{ height: '100%', width: '100%' }} />,
    isManger: false,
    public: false,
  },
  {
    path: FAVORITES_ROUTE,
    element: <FavoriteProductsPage />,
    text: 'מועדפים',
    icon: <BsStarFill style={{ height: '100%', width: '100%' }} />,
    isManger: false,
    public: false,
  },
  {
    path: MANAGER_ROUTE,
    element: <ManagerPage />,
    text: 'מנהל',
    icon: <GrUserAdmin style={{ height: '100%', width: '100%' }} />,
    isManger: true,
    public: false,
  },
];
