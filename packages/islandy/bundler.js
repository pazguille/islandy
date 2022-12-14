const babelConfig = require('./babel.config.json');
require('@babel/register')(babelConfig);

const babel = require('./babel.esbuild');
const fs = require('fs');
const path = require('path');
const readdirSync = (p, a = []) => {
  if (fs.statSync(p).isDirectory()) {
    fs.readdirSync(p).map(f => {
      if (f.endsWith('.js')) {
        return readdirSync(a[a.push(path.join(p, f)) - 1], a);
      } else {
        return readdirSync(path.join(p, f), a);
      }
    })
  }
  return a.map(p => p.replace('routes', ''));
}

function generateManifest() {
  const routesDir = readdirSync('./routes').filter(f => f.endsWith('.js'));
  const islandsDir = fs.readdirSync('./islands');
  const manifest = `// DO NOT EDIT.
module.exports = {
  routes: {
    ${
      routesDir.map(f => {
        const name = f.split('.')[0];
        const path = name.replace('/index', '/').replace(/\[([\w]+)\]/g, ':$1');
        return `'${path}': '/routes${name}',`;
      }).join('\n    ')
    }
  },
  islands: {
    boot: 'islandy/client.js',
    ${
      islandsDir.map(f => {
        const name = f.split('.')[0].toLowerCase();
        return `'island-${name}': './islands/${f}',`;
      }).join('\n    ')
    }
  }
};
`;
  fs.writeFileSync('manifest.islandy.js', manifest);
}
exports.generateManifest = generateManifest;

generateManifest();
fs.rmSync('./public/_islandy/', { recursive: true, force: true });
const { islands } = require(`${process.cwd()}/manifest.islandy`);
require('esbuild')
  .build({
    entryPoints: islands,
    loader: { '.js': 'jsx' },
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    plugins: [
      babel({
        config: {
          presets: ['@babel/preset-react'],
          plugins: [
            ['@babel/plugin-transform-react-jsx', {
              runtime: 'automatic',
              importSource: 'preact'
            }]
          ]
        },
      })
    ],
    format: 'esm',
    outdir: 'public/_islandy',
    target: ['chrome99', 'firefox99', 'safari15'],
    bundle: true,
    treeShaking: true,
    splitting: true,
    minify: true,
    metafile: true,
    write: true,
    watch: process.argv.includes('--watch'),
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
