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
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const app = require('./app.js');

const host = '0.0.0.0';
const keepAliveTimeout = 75000;
const port = process.env.PORT || 8080;

function startServer() {
  const server = http.createServer(app);
  server.keepAliveTimeout = keepAliveTimeout;
  server.listen(port, host, () => {
    console.log(`App listening on port ${port}.`);
  });
}

if (process.env.NODE_ENV === 'production') {
  if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i+= 1) {
      cluster.fork();
    }
    cluster.on('online', (worker) => {
      console.log(`Worker ${worker.process.pid} is online.`);
    });
    cluster.on('exit', (worker) => {
      console.log(`Worker ${worker.process.pid} is dead.`);
      cluster.fork();
    });
  } else {
    startServer();
  }
} else {
  startServer();
}
