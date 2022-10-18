import { groupBy, get, isEmpty } from 'lodash';
import { toast } from 'react-toastify';
import ManagerProtectedRoute from '../Router/ProtectedRoutes/ManagerProtectedRoute';
import UserProtectedRoute from '../Router/ProtectedRoutes/UserProtectedRoute';

export const isBetween = (value, min, max) => value >= min && value <= max;

export const isPasswordValid = (password) => {
  const MIN_PASSWORD_LENGTH = 6;
  const MAX_PASSWORD_LENGTH = 12;

  return isBetween(password.length, MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH);
};

export const isUsernameValid = (username) => {
  const MIN_USERNAME_LENGTH = 4;
  const MAX_USERNAME_LENGTH = 12;

  return isBetween(username.length, MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH);
};

export const isThereEmptyField = (...fields) => {
  const emptyFields = fields.filter((field) => isEmpty(field));
  // TODO RamdaJs
  return !isEmpty(emptyFields);
};

export const handleGettingUser = async (
  getUser,
  handleSuccess,
  handleError
) => {
  try {
    const user = await getUser();

    handleSuccess(user);
  } catch (error) {
    handleError(error.response.data);
  }
};

export const getDateString = (date) => date.toLocaleDateString();

export const getProductDetails = (product) => [
  {
    detail: getDateString(new Date(product.addDate)),
    text: 'הוספה לאתר',
  },
  {
    detail: getDateString(new Date(product.productionDate)),
    text: 'ייצור',
  },
  {
    detail: product.category.name,
    text: 'קטגוריה',
  },
];

export const getProperty = (object, property) => get(object, property);

export const splitArrayByProperty = (arr, property) =>
  groupBy(arr, (object) => getProperty(object, property));

export const formatItemsByProperty = (items, property) => {
  const splittedItems = splitArrayByProperty(items, property);

  const itemsByProperty = Object.keys(splittedItems).map((propertyName) => {
    return {
      name: propertyName,
      items: splittedItems[propertyName].map((item) => {
        return { item, key: item._id };
      }),
    };
  });

  return itemsByProperty;
};

export const createSection = (name, items, productProperty) => {
  return {
    name,
    section: formatItemsByProperty(items, productProperty),
  };
};

export const showAlert = (type, message) => toast(message, { type });

export const protectRoutes = (routes) =>
  routes.map((route) => {
    return {
      ...route,
      element: route.isManager ? (
        <UserProtectedRoute>
          <ManagerProtectedRoute>{route.element}</ManagerProtectedRoute>
        </UserProtectedRoute>
      ) : route.public ? (
        route.element
      ) : (
        <UserProtectedRoute>{route.element}</UserProtectedRoute>
      ),
    };
  });
