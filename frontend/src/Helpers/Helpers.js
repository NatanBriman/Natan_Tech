import { groupBy, get, isEmpty } from 'lodash';

export const isBetween = (value, min, max) => value >= min && value <= max;

export const isPasswordValid = (password) => {
  const MIN_PASSWORD_LENGTH = 6;
  const MAX_PASSWORD_LENGTH = 12;

  return isBetween(password.length, MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH);
};

export const isThereEmptyField = (...fields) => {
  const emptyFields = fields.filter((field) => isEmpty(field));

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
