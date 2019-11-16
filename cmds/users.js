const TwitchAPI = require('../twitch-api');
const { cmdHelpers } = require('../helpers');

exports.command = 'users';
exports.desc = 'Gets information about one or more specified Twitch users.';
exports.builder = {
  id: {
    description: 'User ID',
    type: 'string',
  },
  login: {
    alias: ['l', 'u'],
    description: 'User login name',
    type: 'string',
  },
};
exports.handler = (argv) => {
  const requiredOptions = ['id', 'login'];

  const params = cmdHelpers.buildParams(argv, requiredOptions);

  if (!params) {
    return;
  }

  TwitchAPI.helixFetch('users', params);
};
