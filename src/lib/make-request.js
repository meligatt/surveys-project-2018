import axios  from 'axios';

const setRequestMethod = (method) => {
  const EXPECTED_API_METHODS = ['GET', 'POST'];

  if (EXPECTED_API_METHODS.indexOf(method) === -1 ){
    throw new Error('Unexpected Request method');
  }
  return method;
};

export const makeRequest = ({ endpoint, method, params }) => {
  return axios({
    url: endpoint,
    method: setRequestMethod(method),
    params,
    transformResponse: [(data) => data],
  })
  .then(({data}) => {
    return JSON.parse(data);
  })
  .catch((error) => {
    throw(error.response.status);
  });
}
