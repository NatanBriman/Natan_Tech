import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { LOGIN_ROUTE } from '../Helpers/Constants';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);

  // TODO: Add alert that says 'You have to be logged in'
  return isEmpty(user) ? <Navigate to={LOGIN_ROUTE} /> : children;
};

export default ProtectedRoute;