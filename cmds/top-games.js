
const TwitchAPI = require('../twitch-api');
const { cmdHelpers } = require('../helpers');

exports.command = 'top-games';
exports.desc = 'Gets games sorted by number of current viewers on Twitch, most popular first.';
exports.builder = {
  ...TwitchAPI.FULL_PAGINATION_OPTIONS,
};
exports.handler = (argv) => {
  const requiredOptions = [];
  const optionalOptions = Object.keys(exports.builder);

  const params = cmdHelpers.buildParams(argv, requiredOptions, optionalOptions);

  if (!params) {
    return;
  }

  TwitchAPI.helixFetch('games/top', params);
};
