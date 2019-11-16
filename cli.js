#!/usr/bin/env node
const yargs = require('yargs');
const TwitchAPI = require('./twitch-api');

// eslint-disable-next-line no-unused-expressions
yargs.commandDir('cmds')
  .usage('\nQuickly look up information from the Twitch API using the CLI tool.\nUsage: twitch-info <command> [options]')
  .scriptName('twitch-info')
  .example('$0 users -l talk2megooseman', 'return the users information')
  .example('$0 user-follows --help', 'print user-follows command information')
  .demandCommand()
  .help()
  .alias('h', 'help')
  .argv;
