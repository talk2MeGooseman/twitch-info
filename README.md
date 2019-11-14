# twitch-info
More commands to come!!!!

```
npx twitch-info <command> [options]
```

```
Usage: twitch-info CLI tool for easily retrieve Twitch info using npx

Options:
  -V, --version    output the version number
  -h, --help       output usage information

Commands:
  clips [options]  Get clips info from broadcaster_id, game_id, or specific clip_id
  users [options]  Get Twitch users information by ID or Login name
```

## Clips
```
Usage: twitch-info clips [options]

Get clips info from broadcaster_id, game_id, or specific clip_id

Options:
  -b, --broadcaster_id <id>  Get by broadcaster ID
  -g, --game_id <id>         Get by game ID
  -c, --clip_id <id>         Get specific clip ID
  -f, --first <number>       Number of clips to return, limit 100 (default: 20)
```
## User
```
Usage: twitch-info users [options]

Get Twitch users information by ID or Login name

Options:
  -i, --id <id>         Get info by user ID
  -l, --login <string>  Get info by user login name
```
