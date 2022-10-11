import { Navigate, Route, Routes } from 'react-router-dom';
import { LOGIN_ROUTE, STORE_ROUTE } from '../Helpers/Constants';
import LoginPage from '../Pages/LoginPage';
import StorePage from '../Pages/Store/StorePage';

export const ROUTES = [
  {
    path: LOGIN_ROUTE,
    element: <LoginPage />,
    text: 'התחברות',
  },
  {
    path: STORE_ROUTE,
    element: <StorePage />,
    text: 'חנות',
  },
];

const RouterView = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={LOGIN_ROUTE} />} />
      <Route path='*' element={<Navigate to={LOGIN_ROUTE} />} />

      {ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default RouterView;
