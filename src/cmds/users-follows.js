const TwitchAPI = require('../twitch-api');
const { cmdHelpers } = require('../helpers');

exports.command = 'user-follows';
exports.desc =
  'Gets information on follow relationships between two Twitch users. Information returned is sorted in order, most recent follow first. This can return information like “who is lirik following,” “who is following lirik,” or “is user X following user Y.';
exports.builder = {
  from_id: {
    description:
      'User ID. The request returns information about users who are being followed by the from_id user.',
    type: 'string',
  },
  to_id: {
    description:
      'User ID. The request returns information about users who are following the to_id user.',
    type: 'string',
  },
  ...TwitchAPI.AFTER_OPTION,
  ...TwitchAPI.FIRST_OPTION,
};
exports.handler = argv => {
  const requiredOptions = ['from_id', 'to_id'];
  const optionalOptions = ['first', 'after'];

  const params = cmdHelpers.buildParams(argv, requiredOptions, optionalOptions);

  if (!params) {
    return;
  }

  TwitchAPI.helixFetch('users/follows', params);
};
