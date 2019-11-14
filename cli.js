#!/usr/bin/env node

const program = require('commander');
const fetch = require('node-fetch');
const { URL, URLSearchParams } = require('url');


const clientId = 'jwpse7kaeqzems1n3f0cmg0ltwxi8r';
const HELIX_BASE_URL = 'https://api.twitch.tv/helix/';

// program
// .name('firestore-backup-restore')
// .usage('you can import JSON data into your Firestore DB or export JSON data from your Firestore DB. You are required to have generated a service account file and specify you Firestore DB URL')
// .requiredOption('-u, --url <https://database-url.com>', 'Database URL for your Firestore')
// .option('-c, --creds <file_path>', 'file path to your Firestore credentials', './serviceAccountKey.json');

program
  .command('clips')
  .description('run setup commands for all envs')
  .option('-b, --broadcaster_id <id>', '')
  .option('-g, --game_id <id>', '')
  .option('-c, --clip_id <id>', '')
  .option('-f, --first <number>', '')
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
  .description('run setup commands for all envs')
  .option('-i, --id <id>', '')
  .option('-l, --login <string>', '')
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
