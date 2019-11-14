#!/usr/bin/env node

const program = require('commander');
const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');


const clientId = 'jwpse7kaeqzems1n3f0cmg0ltwxi8r';
const HELIX_BASE_URL = 'https://api.twitch.tv/helix/';

program
  .version('1.0.0')
  .name('twitch-info')
  .usage('CLI tool for easily retrieve Twitch info using npx');

program
  .command('clips')
  .description('Get clips info from broadcaster_id, game_id, or specific clip_id')
  .option('-b, --broadcaster_id <id>', 'Get by broadcaster ID')
  .option('-g, --game_id <id>', 'Get by game ID')
  .option('-c, --clip_id <id>', 'Get specific clip ID')
  .option('-f, --first <number>', 'Number of clips to return, limit 100', 20)
  .action((commandOptions) => {
    const params = new URLSearchParams();

    if (commandOptions.broadcaster_id) {
      params.append('broadcaster_id', commandOptions.broadcaster_id);
    } else if (commandOptions.game_id) {
      params.append('game_id ', commandOptions.game_id);
    } else if (commandOptions.clip_id) {
      params.append('id', commandOptions.clip_id);
    }

    if (commandOptions.first) {
      params.append('first', commandOptions.first);
    }

    helixRequest('clips', params);
  });

program
  .command('users')
  .description('Get Twitch users information by ID or Login name')
  .option('-i, --id <id>', 'Get info by user ID')
  .option('-l, --login <string>', 'Get info by user login name')
  .action((commandOptions) => {
    const params = new URLSearchParams();

    if (commandOptions.id) {
      params.append('id', commandOptions.id);
    } else if (commandOptions.login) {
      params.append('login', commandOptions.login);
    }

    helixRequest('users', params);
  });

program.parse(process.argv);

// If not commands specified display help
if (!process.argv.slice(2).length) {
  program.help();
}

function helixRequest(path, params = null) {
  const url = new URL(HELIX_BASE_URL + path);

  if (url) {
    url.search = new URLSearchParams(params).toString();
  }

  fetch(url, {
    headers: {
      'Client-ID': clientId,
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}
