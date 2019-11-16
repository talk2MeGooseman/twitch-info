# twitch-info

```
npx twitch-info <command> [options]
```

```
Quickly look up information from the Twitch API using the CLI tool.
Usage: twitch-info <command> [options]

Commands:
  twitch-info clips             Gets clip information by clip ID, broadcaster
                                ID, or game ID.
  twitch-info games             Gets clip information by clip ID, broadcaster
                                ID, or game ID.
  twitch-info streams-metadata  Gets information about active streams. Streams
                                are returned sorted by number of current
                                viewers, in descending order. Across multiple
                                pages of results, there may be duplicate or
                                missing streams, as viewers join and leave
                                streams.
  twitch-info streams           Gets information about active streams. Streams
                                are returned sorted by number of current
                                viewers, in descending order. Across multiple
                                pages of results, there may be duplicate or
                                missing streams, as viewers join and leave
                                streams.
  twitch-info top-games         Gets games sorted by number of current viewers
                                on Twitch, most popular first.
  twitch-info users-extensions  Gets games sorted by number of current viewers
                                on Twitch, most popular first.
  twitch-info user-follows      Gets information on follow relationships between
                                two Twitch users. Information returned is sorted
                                in order, most recent follow first. This can
                                return information like “who is lirik
                                following,” “who is following lirik,” or “is
                                user X following user Y.
  twitch-info users             Gets information about one or more specified
                                Twitch users.
  twitch-info videos            Gets games sorted by number of current viewers
                                on Twitch, most popular first.

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]

Examples:
  twitch-info users -l talk2megooseman  return the users information
  twitch-info user-follows --help       print user-follows command information
```

## Clips
```
Gets clip information by clip ID, broadcaster ID, or game ID.

Options:
  --version             Show version number                            [boolean]
  --broadcaster_id, -b  Get by broadcaster ID                           [string]
  --clip_id, -c         Get specific clip ID                            [string]
  --game_id, -g         Get by game ID                                  [string]
  --first, -f           Maximum number of objects to return. Maximum: 100.
                        Default: 20.                      [string] [default: 20]
  -h, --help            Show help                                      [boolean]
```
## Games
```
Gets clip information by clip ID, broadcaster ID, or game ID.

Options:
  --version   Show version number                                      [boolean]
  --id        Game ID                                                   [string]
  --name, -n  Game name. The name must be an exact match. For instance,
              “Pokemon” will not return a list of Pokemon games; instead, query
              the specific Pokemon game(s) in which you are interested. [string]
  -h, --help  Show help                                                [boolean]
```
## Streams Metadata
```
Gets information about active streams. Streams are returned sorted by number of
current viewers, in descending order. Across multiple pages of results, there
may be duplicate or missing streams, as viewers join and leave streams.

Options:
  --version      Show version number                                   [boolean]
  --language     Stream language.                                       [string]
  --user_login   Returns streams broadcast by specified login name.     [string]
  --user_id      Returns data by specified user IDs.                    [string]
  --game_id, -g  Get by game ID                                         [string]
  --before, -b   Cursor for backward pagination: tells the server where to start
                 fetching the next set of results, in a multi-page response.
                                                                        [string]
  --after, -a    Cursor for forward pagination: tells the server where to start
                 fetching the next set of results, in a multi-page response.
                                                                        [string]
  --first, -f    Maximum number of objects to return. Maximum: 100. Default: 20.
                                                          [string] [default: 20]
  -h, --help     Show help                                             [boolean]
```
## Streams
```
Gets information about active streams. Streams are returned sorted by number of
current viewers, in descending order. Across multiple pages of results, there
may be duplicate or missing streams, as viewers join and leave streams.

Options:
  --version         Show version number                                [boolean]
  --language        Stream language.                                    [string]
  --user_login, -l  Returns streams broadcast by specified login name.  [string]
  --user_id         Returns data by specified user IDs.                 [string]
  --game_id, -g     Get by game ID                                      [string]
  --before, -b      Cursor for backward pagination: tells the server where to
                    start fetching the next set of results, in a multi-page
                    response.                                           [string]
  --after, -a       Cursor for forward pagination: tells the server where to
                    start fetching the next set of results, in a multi-page
                    response.                                           [string]
  --first, -f       Maximum number of objects to return. Maximum: 100. Default:
                    20.                                   [string] [default: 20]
  -h, --help        Show help                                          [boolean]
```
## Top Games
```
Gets games sorted by number of current viewers on Twitch, most popular first.

Options:
  --version     Show version number                                    [boolean]
  --before, -b  Cursor for backward pagination: tells the server where to start
                fetching the next set of results, in a multi-page response.
                                                                        [string]
  --after, -a   Cursor for forward pagination: tells the server where to start
                fetching the next set of results, in a multi-page response.
                                                                        [string]
  --first, -f   Maximum number of objects to return. Maximum: 100. Default: 20.
                                                          [string] [default: 20]
  -h, --help    Show help                                              [boolean]
```
## Users Activated Extensions
```
twitch-info users-extensions

Gets games sorted by number of current viewers on Twitch, most popular first.

Options:
  --version   Show version number                                      [boolean]
  --user_id   Returns data by specified user IDs.                       [string]
  -h, --help  Show help                                                [boolean]
```
## User Follows
```
twitch-info user-follows

Gets information on follow relationships between two Twitch users. Information
returned is sorted in order, most recent follow first. This can return
information like “who is lirik following,” “who is following lirik,” or “is user
X following user Y.

Options:
  --version    Show version number                                     [boolean]
  --from_id    User ID. The request returns information about users who are
               being followed by the from_id user.                      [string]
  --to_id      User ID. The request returns information about users who are
               following the to_id user.                                [string]
  --after, -a  Cursor for forward pagination: tells the server where to start
               fetching the next set of results, in a multi-page response.
                                                                        [string]
  --first, -f  Maximum number of objects to return. Maximum: 100. Default: 20.
                                                          [string] [default: 20]
  -h, --help   Show help                                               [boolean]
```
## User
```
twitch-info users

Gets information about one or more specified Twitch users.

Options:
  --version        Show version number                                 [boolean]
  --id             User ID                                              [string]
  --login, -l, -u  User login name                                      [string]
  -h, --help       Show help                                           [boolean]
```
## Videos
```
twitch-info videos

Gets games sorted by number of current viewers on Twitch, most popular first.

Options:
  --version       Show version number                                  [boolean]
  --id            ID of the video being queried.                        [string]
  --game_id, -g   Get by game ID                                        [string]
  --user_id       Returns data by specified user IDs.                   [string]
  --before, -b    Cursor for backward pagination: tells the server where to
                  start fetching the next set of results, in a multi-page
                  response.                                             [string]
  --after, -a     Cursor for forward pagination: tells the server where to start
                  fetching the next set of results, in a multi-page response.
                                                                        [string]
  --first, -f     Maximum number of objects to return. Maximum: 100. Default:
                  20.                                     [string] [default: 20]
  --language, -l  Language of the video being queried.                  [string]
  --period, -p    Period during which the video was created. Valid values:
                  "all", "day", "week", "month". Default: "all".        [string]
  --sort, -s      Sort order of the videos. Valid values: "time", "trending",
                  "views". Default: "time".                             [string]
  --type, -t      Type of video. Valid values: "all", "upload", "archive",
                  "highlight". Default: "all".                          [string]
  -h, --help      Show help                                            [boolean]
```
