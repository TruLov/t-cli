import inquirer from 'inquirer';
import { spawnSync } from 'child_process';

const API_URLS = [
  'https://api.cf.us10-001.hana.ondemand.com',
  'https://api.cf.eu10.hana.ondemand.com',
  'https://api.cf.eu10-004.hana.ondemand.com',
];

const USERNAMES = ['tom.ruloff-ext@veolia.com', 'tom.ruloff@gambit.de'];

export async function cfl() {
  await inquirer
    .prompt([
      {
        type: 'list',
        name: 'apiUrl',
        message: 'At which endpoint do you want to login?',
        choices: API_URLS,
        default: API_URLS[0],
      },
      {
        type: 'list',
        name: 'username',
        message: 'With which username do you want to login?',
        choices: USERNAMES,
        default: USERNAMES[0],
      },
      {
        type: 'password',
        name: 'secret',
        message: 'Enter your password:',
      },
    ])
    .then((answers) => {
      let args = [];
      if (answers.apiUrl) args.push('-a', answers.apiUrl);
      if (answers.username) args.push('-u', answers.username);
      if (answers.secret) args.push('-p', answers.secret);

      console.log(
        `Executing the following prompt: cf login ${JSON.stringify(args)}`
      );

      spawnSync('cf', ['login', ...args], { stdio: 'inherit' });
    });
}
