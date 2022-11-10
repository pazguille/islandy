const express = require('express');
const bodyParser = require('body-parser');
const render = require('./render');
const { routes } = require('../../manifest.pie');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

for (const [route, component] of Object.entries(routes)) {
  app.get(
    route,
    component?.middlewares || [],
    (() => {
      return component?.get || ((req, res, next) => next());
    })(),
    (req, res) => {
      res.send(render(component.default, res.locals));
    },
  );
}

if (routes['/404']) {
  app.use(
    routes['/404']?.middlewares || [],
    (req, res, next) => {
      res.status(404).send(render(routes['/404'].default, res.locals));
    }
  );
}

if (routes['/500']) {
  app.use(
    routes['/500']?.middlewares || [],
    (err, req, res, next) => {
      res.status(500).send(render(routes['/500'].default, res.locals));
    }
  );
}

module.exports = app;
