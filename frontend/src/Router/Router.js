import { Navigate, useRoutes } from 'react-router-dom';
import { LOGIN_ROUTE, ROUTES } from '../Helpers/Constants';
import LoginPage from '../Pages/Login/LoginPage';

const SPECIAL_ROUTES = [
  { path: LOGIN_ROUTE, element: <LoginPage /> },
  { path: '/', element: <Navigate to={LOGIN_ROUTE} /> },
  { path: '*', element: <Navigate to={LOGIN_ROUTE} /> },
];

const RouterView = () => {
  const routes = useRoutes([...ROUTES, ...SPECIAL_ROUTES]);

  return routes;
};

export default RouterView;
