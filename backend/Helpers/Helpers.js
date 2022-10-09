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
