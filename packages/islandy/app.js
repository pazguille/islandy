const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const hpp = require('hpp');
const Youch = require('youch');
const render = require('./render');

const app = express();

const staticConfig = process.env.NODE_ENV === 'production' ? { cacheControl: true, setHeaders: (res, path) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
}} : null;

app.use(express.static('public', staticConfig));
app.use(compression());
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(hpp());

const cwd = process.cwd();
const { routes } = require(`${cwd}/manifest.islandy`);

if (process.env.NODE_ENV !== 'production') {
  const chokidar = require('chokidar');
  chokidar.watch(process.cwd(), { ignored: /node_modules/ }).on('change', (f) => {
    Object.keys(require.cache).forEach((id) => {
      if (id === f) {
        delete require.cache[id];
      }
    });
    for (const path of Object.values(routes)) {
      delete require.cache[cwd + path + '.js'];
    }
  });

  for (const [path, component] of Object.entries(routes)) {
    app.get(
      path,
      require(cwd + component)?.middlewares || [],
      (() => {
        return require(cwd + component)?.get || ((req, res, next) => next());
      })(),
      (req, res) => {
        res.send(render(require(cwd + component).default, res.locals));
      },
    );
  }

} else {
  for (const [path, component] of Object.entries(routes)) {
    const route = require(cwd + component);
    app.get(
      path,
      route?.middlewares || [],
      (() => {
        return route?.get || ((req, res, next) => next());
      })(),
      (req, res) => {
        res.send(render(route.default, res.locals));
      },
    );
  }
}

if (routes['/404']) {
  app.use(
    routes['/404']?.middlewares || [],
    (req, res, next) => {
      res.status(404).send(render(routes['/404'].default, res.locals));
    }
  );
}

app.use((error, req, res, next) => {
  if (error && process.env.NODE_ENV !== 'production' && !res.headersSent) {
    const youch = new Youch(error, req);

    return youch
      .toHTML()
      .then(html => (
        res
          .status(500)
          .set('Content-Type', 'text/html')
          .send(html)
      ))
  }
  next(error);
});

if (routes['/500']) {
  app.use(
    routes['/500']?.middlewares || [],
    (err, req, res, next) => {
      res.status(500).send(render(routes['/500'].default, res.locals));
    }
  );
}

module.exports = app;
