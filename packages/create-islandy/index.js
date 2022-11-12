#!/usr/bin/env node

const { promisify } = require('util');
const { downloadTemplate } = require('giget')

const exec = promisify(require('child_process').exec);
const cwd = process.cwd();

async function main() {
  await downloadTemplate('github:pazguille/islandy/examples/demo#package', {
      force: true,
      cwd,
      dir: '.',
  });

  const install = await exec('npm install');
  console.log(install.stdout);

  const dev = await exec('npm run dev');
  console.log(dev.stdout);
}
main();
