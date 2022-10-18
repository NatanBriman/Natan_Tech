import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { STORE_ROUTE } from '../../Helpers/Constants';
import { showAlert } from '../../Helpers/Helpers';

const ManagerProtectedRoute = ({ children }) => {
  const { isManager } = useSelector((state) => state.user.user);

  if (!isManager) {
    console.log('hi');
    showAlert('error', '!אין לך הרשאות מנהל');

    return <Navigate to={STORE_ROUTE} />;
  }

  return children;
};

export default ManagerProtectedRoute;
