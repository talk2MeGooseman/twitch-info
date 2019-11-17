
const TwitchAPI = require('../twitch-api');
const { cmdHelpers } = require('../helpers');

exports.command = 'users-extensions';
exports.desc = 'Gets games sorted by number of current viewers on Twitch, most popular first.';
exports.builder = {
  ...TwitchAPI.USER_ID_OPTION,
};
exports.handler = (argv) => {
  const requiredOptions = Object.keys(exports.builder);

  const params = cmdHelpers.buildParams(argv, requiredOptions);

  if (!params) {
    return;
  }

  TwitchAPI.helixFetch('users/extensions', params);
};
