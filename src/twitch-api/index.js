exports.CLIENT_ID = 'jwpse7kaeqzems1n3f0cmg0ltwxi8r'
exports.helixFetch = require('./helixFetch')

exports.AFTER_OPTION = {
  after: {
    alias: 'a',
    description:
      'Cursor for forward pagination: tells the server where to start fetching the next set of results, in a multi-page response.',
    type: 'string',
  },
}

exports.FIRST_OPTION = {
  first: {
    alias: 'f',
    description:
      'Maximum number of objects to return. Maximum: 100. Default: 20.',
    default: 20,
    type: 'string',
  },
}

exports.FULL_PAGINATION_OPTIONS = {
  before: {
    alias: 'b',
    description:
      'Cursor for backward pagination: tells the server where to start fetching the next set of results, in a multi-page response.',
    type: 'string',
  },
  ...exports.AFTER_OPTION,
  ...exports.FIRST_OPTION,
}

exports.GAME_ID_OPTION = {
  game_id: {
    alias: 'g',
    description: 'Get by game ID',
    type: 'string',
  },
}

exports.USER_ID_OPTION = {
  user_id: {
    description: 'Returns data by specified user IDs.',
    type: 'string',
  },
}
