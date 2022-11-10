// DO NOT EDIT.
module.exports = {
  routes: {
    '/404': require('./routes/404'),
    '/500': require('./routes/500'),
    '/about': require('./routes/about'),
    '/admin/:user': require('./routes/admin/[user]'),
    '/admin/': require('./routes/admin/index'),
    '/': require('./routes/index'),
  },
  islands: {
    boot: './pie/boot.js',
    'island-counter': './islands/Counter.js',
  }
};
