export const isEmpty = (data) => {
  if (data === undefined) return true;

  switch (typeof data) {
    case 'object':
      return data.isArray ? data.length === 0 : Object.keys(data).length === 0;

    case 'number':
      return data === 0;

    case 'string':
      return data === '';

    default:
      return true;
  }
};

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
    handleError(error);
  }
};
