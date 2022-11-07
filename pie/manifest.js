module.exports = {
  routes: {
    '/': require('../routes/index'),
    '/about': require('../routes/about'),
  },
  islands: {
    'island-counter': './islands/Counter.js',
  }
};
