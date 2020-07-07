const axios = require('axios');

/**
 * @method getApi
 * @return {object} api result from API:https://api.github.com/
 * @example getApi()
 */

const getApi = () => {
  return axios.get('https://api.github.com/')
  .then((res)=> {
    return (res.data);
  })
  .catch((err) => {
    return new Error();
  })
}

module.exports = {
  getApi
}