import axios from 'axios';
import requests from './utils/requests';

export const func = async (params = { id: 1, headerParam: '123', bodyParam: 'abc' }) => {
  const { id, headerParam, bodyParam } = params;

  const { url, method } = requests.todos(id);
  const request = await axios({
    url,
    method,
    headers: {
      headerParam,
    },
    data: {
      bodyParam,
    },
  });
  const result = request.data;

  return result;
};

/* istanbul ignore next */ // IIFE to log code result for npm script
(async () => !process.env.JEST_WORKER_ID && console.log(await func()))();
