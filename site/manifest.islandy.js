// DO NOT EDIT.
module.exports = {
  routes: {
    '/docs/:page/:section': '/routes/docs/[page]/[section]',
    '/docs/:page/': '/routes/docs/[page]/index',
    '/': '/routes/index',
  },
  islands: {
    boot: 'islandy/client.js',
    
  }
};
