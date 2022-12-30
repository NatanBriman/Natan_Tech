import { useMemo } from 'react';
import useDataFromAPI from './useDataFromAPI';

const useLocalStorageFromAPI = (initialValue, requestDataFromAPI, key, parameters) => {
  const valueInLocalStorage = localStorage.getItem(key);
  const initialValueFromLocalStorage = valueInLocalStorage
    ? JSON.parse(valueInLocalStorage)
    : initialValue;

  const initializeValueInLocalStorage = async (parameters) => {
    if (valueInLocalStorage) return initialValueFromLocalStorage;

    const data = await requestDataFromAPI(parameters);
    localStorage.setItem(key, JSON.stringify(data));

    return data;
  };

  const [data, setData, isLoading] = useDataFromAPI(
    initialValueFromLocalStorage,
    initializeValueInLocalStorage,
    parameters
  );

  useMemo(() => {
    const stringValue = JSON.stringify(data);

    localStorage.setItem(key, stringValue);
  }, [key, data]);

  return [data, setData, isLoading];
};

export default useLocalStorageFromAPI;
