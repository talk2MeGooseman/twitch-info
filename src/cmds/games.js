const TwitchAPI = require('../twitch-api')
const { cmdHelpers } = require('../helpers')

exports.command = 'games'
exports.desc = 'Gets clip information by clip ID, broadcaster ID, or game ID.'
exports.builder = {
  id: {
    description: 'Game ID',
    type: 'string',
  },
  name: {
    alias: 'n',
    description:
      'Game name. The name must be an exact match. For instance, “Pokemon” will not return a list of Pokemon games; instead, query the specific Pokemon game(s) in which you are interested.',
    type: 'string',
  },
}
exports.handler = argv => {
  const requiredOptions = Object.keys(exports.builder)

  const params = cmdHelpers.buildParams(argv, requiredOptions)

  if (!params) {
    return
  }

  TwitchAPI.helixFetch('games', params)
}
