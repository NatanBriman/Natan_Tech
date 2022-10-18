import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { HOME_ROUTE } from '../Helpers/Constants';
import { showAlert } from '../Helpers/Helpers';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);

  if (isEmpty(user)) {
    showAlert('error', '!נא להתחבר קודם');

    return <Navigate to={HOME_ROUTE} />;
  }

  return children;
};

export default ProtectedRoute;
