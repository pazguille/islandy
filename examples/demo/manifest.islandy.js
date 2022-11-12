// DO NOT EDIT.
module.exports = {
  routes: {
    '/404': '/routes/404',
    '/500': '/routes/500',
    '/api/rest': '/routes/api/rest',
    '/game/:game': '/routes/game/[game]',
    '/': '/routes/index',
    '/news': '/routes/news',
  },
  islands: {
    boot: 'islandy/client.js',
    'island-counter': './islands/Counter.js',
    'island-sharebutton': './islands/ShareButton.js',
    'island-video': './islands/Video.js',
    'island-videoplaylist': './islands/VideoPlaylist.js',
    'island-wishtoggle': './islands/WishToggle.js',
  }
};
