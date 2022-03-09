import axios from 'axios';

export const HTTPRequester = (() => {
  const baseURL = 'http://localhost:3001';

  //Maps object queryString to 'key=value' format. Checks if queryString is undefined or empty object
  const mapQueryString = queryString =>
    !queryString
      ? ''
      : Object.entries(queryString).length <= 0
      ? ''
      : `?${Object.entries(queryString)
          .map(key => `${key[0]}=${key[1]}&`)
          .join('')
          .slice(0, -1)}`;

  const HTTPRequesterAPI = {
    /* AXIOS */
    get: options => {
      const headers = options.headers;
      return axios.get(`${baseURL}${options.url}${mapQueryString(options.queryString)}`, { headers });
    },

    post: options => axios.post(`${baseURL}${options.url}`, options.data, { headers: options.headers })
  };
  return HTTPRequesterAPI;
})();
