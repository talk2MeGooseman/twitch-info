const TwitchAPI = require('../twitch-api')
const { cmdHelpers } = require('../helpers')

exports.command = 'videos'
exports.desc =
  'Gets games sorted by number of current viewers on Twitch, most popular first.'
exports.builder = {
  id: {
    description: 'ID of the video being queried.',
    type: 'string',
  },
  ...TwitchAPI.GAME_ID_OPTION,
  ...TwitchAPI.USER_ID_OPTION,
  ...TwitchAPI.FULL_PAGINATION_OPTIONS,
  language: {
    alias: 'l',
    description: 'Language of the video being queried.',
    type: 'string',
  },
  period: {
    alias: 'p',
    description:
      'Period during which the video was created. Valid values: "all", "day", "week", "month". Default: "all".',
    type: 'string',
  },
  sort: {
    alias: 's',
    description:
      'Sort order of the videos. Valid values: "time", "trending", "views". Default: "time".',
    type: 'string',
  },
  type: {
    alias: 't',
    description:
      'Type of video. Valid values: "all", "upload", "archive", "highlight". Default: "all".',
    type: 'string',
  },
}
exports.handler = argv => {
  const requiredOptions = ['id', 'user_id', 'game_id']
  const optionalOptions = [
    'after',
    'before',
    'first',
    'language',
    'period',
    'sort',
    'type',
  ]

  const params = cmdHelpers.buildParams(argv, requiredOptions, optionalOptions)

  if (!params) {
    return
  }

  TwitchAPI.helixFetch('videos', params)
}
