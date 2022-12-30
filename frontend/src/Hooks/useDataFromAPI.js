import { useMemo, useState } from 'react';

const initializeDataFromAPI = async (requestDataFromAPI, callback, parameters) => {
  const data = await requestDataFromAPI(parameters);

  callback(data);
};

const useDataFromAPI = (initialValue, requestDataFromAPI, parameters) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  const handleReceivingData = (dataFromAPI) => {
    setData(dataFromAPI);

    setIsLoading(false);
  };

  useMemo(() => initializeDataFromAPI(requestDataFromAPI, handleReceivingData, parameters), []);

  return [data, setData, isLoading];
};

export default useDataFromAPI;
