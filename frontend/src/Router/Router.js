import { Navigate, useRoutes } from 'react-router-dom';
import { HOME_ROUTE, ROUTES } from '../Helpers/Constants';
import { protectRoutes } from '../Helpers/Helpers';

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
