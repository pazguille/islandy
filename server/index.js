require('@babel/register')();

const http = require('http');
const app = require('./app.js');

const host = '0.0.0.0';
const port = process.env.PORT || 3031;

http.createServer(app).listen(port, host, () => {
  console.log(`App listening on port ${port}.`);
});
