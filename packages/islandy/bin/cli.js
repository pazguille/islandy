#! /usr/bin/env node

const commands = {
  build: () => require('../bundler.js'),
  dev: () => {
    process.env.NODE_ENV = 'development';
    require('../server.js');

  },
  start: () => {
    process.env.NODE_ENV = 'production';
    require('../server.js');
  },
};

commands[process.argv[2]]();
