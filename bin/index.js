#!/usr/bin/env node

import { cfl } from '../lib/cf-login.js';
import { version } from '../lib/version.js';

const HELP = `
Usage: 
  t <command>

Commands:
  help,h          shows this manual
  cf-login,cfl    prompts for cf auth
  version,v       shows current version installed
`;

const arg = process.argv.slice(2);

switch (arg[0]) {
  case 'tom':
  case 't':
    console.log('Tom ist ein Genie 💦');
    break;

  case 'cf-login':
  case 'cfl':
    cfl();
    break;

  case 'version':
  case 'v':
    version();
    break;

  case 'help':
  case 'h':
  default:
    console.log(HELP);
    await version();
    break;
}
