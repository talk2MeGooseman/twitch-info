const TwitchAPI = require('../twitch-api');
const { cmdHelpers } = require('../helpers');

exports.command = 'clips';
exports.desc = 'Gets clip information by clip ID, broadcaster ID, or game ID.';
exports.builder = {
  broadcaster_id: {
    alias: 'b',
    description: 'Get by broadcaster ID',
    type: 'string',
  },
  clip_id: {
    alias: 'c',
    description: 'Get specific clip ID',
    type: 'string',
  },
  ...TwitchAPI.GAME_ID_OPTION,
  ...TwitchAPI.FIRST_OPTION,
};
exports.handler = (argv) => {
  const requiredOptions = ['broadcaster_id', 'game_id', 'clip_id'];
  const optionalOptions = ['first'];

  const params = cmdHelpers.buildParams(argv, requiredOptions, optionalOptions);

  if (!params) {
    return;
  }

  TwitchAPI.helixFetch('clips', params);
};
