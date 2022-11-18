// DO NOT EDIT.
module.exports = {
  routes: {
    '/404': '/routes/404',
    '/500': '/routes/500',
    '/api/demo': '/routes/api/demo',
    '/': '/routes/index',
  },
  islands: {
    boot: 'islandy/client.js',
    'island-counter': './islands/Counter.js',
  }
};
