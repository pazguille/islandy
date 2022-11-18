const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const hpp = require('hpp');
const Youch = require('youch');
const render = require('./render');
const { generateManifest } = require('./bundler');

const cwd = process.cwd();
const { routes } = require(`${cwd}/manifest.islandy`);

const staticConfig = process.env.NODE_ENV === 'production' ? { cacheControl: true, setHeaders: (res, path) => {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
}} : null;

const router = express.Router();
const app = express();
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

function updateRouter() {
  delete require.cache[`${cwd}/manifest.islandy.js`];
  const { routes } = require(`${cwd}/manifest.islandy`);
  router.stack = [];

  for (const [path, component] of Object.entries(routes)) {
    router.get(
      path,
      require(cwd + component)?.middlewares || [],
      (() => {
        return require(cwd + component)?.get || ((req, res, next) => next());
      })(),
      (req, res) => {
        res.send(render(require(cwd + component).default, { ...res.locals, params: req.params }));
      },
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  const chokidar = require('chokidar');
  chokidar.watch(process.cwd(), { ignored: /node_modules/, ignoreInitial: true })
  .on('add', (f) => {
    if (f.includes('routes/') || f.includes('islands/')) {
      generateManifest();
      updateRouter();
    }
  })
  .on('change', (f) => {
    Object.keys(require.cache).forEach((id) => {
      if (id.includes('routes/') || id.includes('islands/') || id.includes('components/')) {
        delete require.cache[id];
      }
    });
    // for (const path of Object.values(routes)) {
    //   delete require.cache[cwd + path + '.js'];
    // }
  })
  .on('unlink', (f) => {
    if (f.includes('routes/') || f.includes('islands/')) {
      generateManifest();
      updateRouter();
    }
  });

  updateRouter();

} else {
  for (const [path, component] of Object.entries(routes)) {
    const route = require(cwd + component);
    router.get(
      path,
      route?.middlewares || [],
      (() => {
        return route?.get || ((req, res, next) => next());
      })(),
      (req, res) => {
        res.send(render(route.default, { ...res.locals, params: req.params }));
      },
    );
  }
}

app.use('/', router);

if (routes['/404']) {
  const route404 = require(cwd + routes['/404']);
  app.use(
    route404?.middlewares || [],
    (req, res, next) => {
      res.status(404).send(render(route404.default, { ...res.locals, params: req.params }));
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
  const route500 = require(cwd + routes['/500']);
  app.use(
    route500?.middlewares || [],
    (err, req, res, next) => {
      res.status(500).send(render(route500.default, { ...res.locals, params: req.params }));
    }
  );
}

module.exports = app;
