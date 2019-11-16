const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');
const TwitchApi = require('../twitch-api');

const HELIX_BASE_URL = 'https://api.twitch.tv/helix/';

/**
 * Performs fetch request to helix <path> API endpoint
 * with any desired [params].
 *
 * @param {String} path
 * @param {URLSearchParams} [params=null]
 */
module.exports = function helixFetch(path, params = null) {
  const url = new URL(HELIX_BASE_URL + path);

  if (url) {
    url.search = new URLSearchParams(params).toString();

  }
  fetch(url, {
    headers: {
      'Client-ID': TwitchApi.CLIENT_ID,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(JSON.stringify(json, null, '  '));
    });
};
