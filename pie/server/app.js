const { h } = require('preact');
const express = require('express');
const bodyParser = require('body-parser');
const render = require('./render');
const { routes } = require('../manifest');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

for (const [route, component] of Object.entries(routes)) {
  app.get(route, (req, res) => {
    res.send(render(component));
  });
}

module.exports = app;
