const TwitchAPI = require('../twitch-api')
const { cmdHelpers } = require('../helpers')

exports.command = 'streams'
exports.desc =
  'Gets information about active streams. Streams are returned sorted by number of current viewers, in descending order. Across multiple pages of results, there may be duplicate or missing streams, as viewers join and leave streams.'
exports.builder = {
  language: {
    description: 'Stream language.',
    type: 'string',
  },
  user_login: {
    alias: 'l',
    description: 'Returns streams broadcast by specified login name.',
    type: 'string',
  },
  ...TwitchAPI.USER_ID_OPTION,
  ...TwitchAPI.GAME_ID_OPTION,
  ...TwitchAPI.FULL_PAGINATION_OPTIONS,
}
exports.handler = argv => {
  const optionalOptions = Object.keys(exports.builder)

  const params = cmdHelpers.buildParams(argv, [], optionalOptions)

  if (!params) {
    return
  }

  TwitchAPI.helixFetch('streams', params)
}
