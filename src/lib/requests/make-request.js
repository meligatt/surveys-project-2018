import axios from 'axios';

const setRequestMethod = (method) => {
  const EXPECTED_API_METHODS = ['GET'];

  if (EXPECTED_API_METHODS.indexOf(method) === -1 ){
    throw new Error('Unexpected Request method');
  }
  return method;
};

export const makeRequest = ({ endpoint, method, params }) => {
   // TODO: add this hardcoded value in a config file with URL's
   const APP_URL = "http://localhost:3000";

  return axios({
    url: APP_URL + endpoint,
    method: setRequestMethod(method),
    params,
    transformResponse: [(data) => data],
  })
  .then(({data}) => {
    return JSON.parse(data);
  })
  .catch((error) => {
    throw(error);
  });
}
