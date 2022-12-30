import { BsCartFill, BsStarFill } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';
import { IoStorefrontSharp } from 'react-icons/io5';
import { VscHistory } from 'react-icons/vsc';
import CartPage from '../Pages/Cart/CartPage';
import FavoriteProductsPage from '../Pages/Favorite/FavoriteProductsPage';
import ManagerPage from '../Pages/Manager/ManagerPage';
import OrdersPage from '../Pages/Orders/OrdersPage';
import StorePage from '../Pages/Store/StorePage';

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
  withHide: true,
};

export const IMAGE_INPUT_PROPS = {
  type: 'image',
  placeholder: 'בחירת תמונת פרופיל',
  withHide: false,
};

export const EMAIL_INPUT_PROPS = {
  required: true,
  type: 'email',
  placeholder: 'example@gmail.com',
  withHide: true,
};

export const PASSWORD_INPUT_PROPS = {
  required: true,
  type: 'password',
  placeholder: 'Example1234',
  withHide: true,
};

export const PRODUCT_NAME_INPUT_PROPS = {
  required: true,
  type: 'text',
  placeholder: 'New Product 2',
  withHide: false,
};

export const PRODUCT_PRODUCTION_DATE_INPUT_PROPS = {
  required: true,
  type: 'date',
  withHide: false,
};

export const PRODUCT_PRICE_INPUT_PROPS = {
  required: true,
  type: 'number',
  placeholder: '100',
  withHide: false,
};

export const PRODUCT_UNITS_INPUT_PROPS = {
  required: true,
  type: 'number',
  placeholder: '250',
  withHide: false,
};

export const PRODUCT_CATEGORY_INPUT_PROPS = {
  required: true,
  type: 'autocomplete',
  emptyLabel: 'אין קטגוריות כאלה',
  paginationText: '?עוד קטגוריות',
  withHide: false,
};

export const PRODUCT_MANUFACTURER_INPUT_PROPS = {
  required: true,
  type: 'autocomplete',
  emptyLabel: 'אין יצרנים כאלה',
  paginationText: '?עוד יצרנים',
  withHide: false,
};

export const CATEGORY_INPUT_PROPS = {
  required: true,
  type: 'text',
  placeholder: 'טלוויזיות חכמות',
  withHide: false,
};

export const MANUFACTURER_INPUT_PROPS = {
  required: true,
  type: 'text',
  placeholder: 'נתן',
  withHide: false,
};

export const REVIEW_CONTENT_INPUT_PROPS = {
  required: true,
  type: 'textarea',
  placeholder: 'היה מעולה!!',
  style: { backgroundColor: '#6c757d' },
  withHide: false,
};

export const REVIEWֹ_RATING_INPUT_PROPS = {
  required: true,
  type: 'number',
  placeholder: '3',
  withHide: false,
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

export const LOCAL_STORAGE_KEYS = {
  users: 'USERS',
  products: 'PRODUCTS',
  orders: 'ORDERS',
  manufacturers: 'MANUFACTURERS',
  categories: 'CATEGORIES',
  reviews: 'REVIEWS',
};
