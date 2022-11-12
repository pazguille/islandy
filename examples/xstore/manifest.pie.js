// DO NOT EDIT.
module.exports = {
  routes: {
    '/404': require('./routes/404'),
    '/500': require('./routes/500'),
    '/game/:game': require('./routes/game/[game]'),
    '/': require('./routes/index'),
    '/news': require('./routes/news'),
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
