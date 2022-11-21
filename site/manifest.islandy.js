// DO NOT EDIT.
module.exports = {
  routes: {
    '/docs/:page/:section': '/routes/docs/[page]/[section]',
    '/docs/:page/': '/routes/docs/[page]/index',
    '/docs/': '/routes/docs/index',
  },
  islands: {
    boot: 'islandy/client.js',
    
  }
};
