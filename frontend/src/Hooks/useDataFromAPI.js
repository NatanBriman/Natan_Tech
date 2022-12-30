import { useMemo, useState } from 'react';

const initializeDataFromAPI = async (requestDataFromAPI, callback) => {
  const data = await requestDataFromAPI();

  callback(data);
};

const useDataFromAPI = (initialValue, requestDataFromAPI) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  const handleReceivingData = (dataFromAPI) => {
    setData(dataFromAPI);

    setIsLoading(false);
  };

  useMemo(() => initializeDataFromAPI(requestDataFromAPI, handleReceivingData), []);

  return [data, setData, isLoading];
};

export default useDataFromAPI;
