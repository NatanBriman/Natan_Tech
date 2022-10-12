import { Navigate, Route, Routes } from 'react-router-dom';
import { CART_ROUTE, LOGIN_ROUTE, STORE_ROUTE } from '../Helpers/Constants';
import { IoStorefrontSharp } from 'react-icons/io5';
import { BsCartFill } from 'react-icons/bs';
import LoginPage from '../Pages/Login/LoginPage';
import StorePage from '../Pages/Store/StorePage';
import CartPage from '../Pages/Cart/CartPage';

export const ROUTES = [
  {
    path: STORE_ROUTE,
    element: <StorePage />,
    text: 'חנות',
    icon: <IoStorefrontSharp style={{ height: '100%', width: '100%' }} />,
  },
  {
    path: CART_ROUTE,
    element: <CartPage />,
    text: 'עגלה',
    icon: <BsCartFill style={{ height: '100%', width: '100%' }} />,
  },
];

const RouterView = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={LOGIN_ROUTE} />} />
      <Route path='*' element={<Navigate to={LOGIN_ROUTE} />} />
      <Route path={LOGIN_ROUTE} element={<LoginPage />} />

      {ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default RouterView;
