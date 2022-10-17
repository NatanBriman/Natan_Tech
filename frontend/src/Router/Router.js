import { Navigate, useRoutes } from 'react-router-dom';
import { HOME_ROUTE, ROUTES } from '../Helpers/Constants';

const SPECIAL_ROUTES = [
  { path: '/', element: <Navigate to={HOME_ROUTE} /> },
  { path: '*', element: <Navigate to={HOME_ROUTE} /> },
];

const RouterView = () => {
  const routes = useRoutes([...ROUTES, ...SPECIAL_ROUTES]);

  return routes;
};

export default RouterView;
