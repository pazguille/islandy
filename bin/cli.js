#! /usr/bin/env node

const commands = {
  build: () => require('../builder.js'),
  dev: () => require('../server.js'),
  start: () => require('../server.js'),
};

commands[process.argv[2]]();
