require('@babel/register')();

const { islands } = require('../manifest');
islands.boot = './pie/boot.js';

require('esbuild')
  .build({
    entryPoints: islands,
    loader: { '.js': 'jsx' },
    jsx: 'automatic',
    jsxImportSource: 'preact',
    format: 'esm',
    outdir: 'public',
    target: ['chrome99', 'firefox99', 'safari15'],
    bundle: true,
    treeShaking: true,
    splitting: true,
    minify: true,
    metafile: true,
    write: true,
    watch: false,
  })
  .catch(() => process.exit(1));
