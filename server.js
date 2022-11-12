const babelConfig = require('./babel.config.json');
require('@babel/register')({
  ...babelConfig,
  only: [
    (filepath) => {
      return filepath.includes('/islandy/') || !filepath.includes('node_modules');
    }
  ],
});

const http = require('http');
const app = require('./app.js');

const host = '0.0.0.0';
const port = process.env.PORT || 8080;

http.createServer(app).listen(port, host, () => {
  console.log(`App listening on port ${port}.`);
});
