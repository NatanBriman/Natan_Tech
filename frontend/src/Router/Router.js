import { BsCartFill, BsStarFill } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';
import { IoStorefrontSharp } from 'react-icons/io5';
import { VscHistory } from 'react-icons/vsc';
import { Navigate, useRoutes } from 'react-router-dom';
import {
  CART_ROUTE,
  FAVORITES_ROUTE,
  HOME_ROUTE,
  MANAGER_ROUTE,
  ORDERS_ROUTE,
  STORE_ROUTE,
} from '../Helpers/Constants';
import { protectRoutes } from '../Helpers/Helpers';
import CartPage from '../Pages/Cart/CartPage';
import FavoriteProductsPage from '../Pages/Favorite/FavoriteProductsPage';
import ManagerPage from '../Pages/Manager/ManagerPage';
import OrdersPage from '../Pages/Orders/OrdersPage';
import StorePage from '../Pages/Store/StorePage';

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

const SPECIAL_ROUTES = [
  { path: '/', element: <Navigate to={HOME_ROUTE} /> },
  { path: '*', element: <Navigate to={HOME_ROUTE} /> },
];

const RouterView = () => {
  const protectedRoutes = protectRoutes(ROUTES);
  const routes = useRoutes([...protectedRoutes, ...SPECIAL_ROUTES]);

  return routes;
};

export default RouterView;
