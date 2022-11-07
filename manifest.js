module.exports = {
  routes: {
    '/': require('./routes/index'),
    '/about': require('./routes/about'),
  },
  islands: {
    boot: 'islands/boot.js',
    'island-counter': 'islands/Counter.js',
  }
};
