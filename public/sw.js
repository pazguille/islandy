const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  '/src/styles.css',
  '/manifest.json',
  'src/assets/favicon.png',
  '/src/assets/screenshots-1.jpg',
  '/src/assets/screenshots-2.jpg',
  '/src/assets/screenshots-3.jpg',
  '/src/assets/screenshots-4.jpg',
  '/src/assets/manifest-icon-192.maskable.png',

  '/src/assets/logo.svg',
  '/src/assets/icons/tag.svg',
  '/src/assets/game-pass.svg',
  '/src/assets/ea-play.png',
  '/src/assets/icons/chart.svg',
  '/src/assets/icons/play.svg',
  '/src/assets/icons/news.svg',
  '/src/assets/icons/heart.svg',

  '/src/js/web-components.js',

  '/src/assets/bahnschrift.woff2',
  'https://fonts.gstatic.com/s/inter/v7/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2',

  'https://api.xstoregames.com/api/games?list=new&skipitems=0',
  'https://api.xstoregames.com/api/games?list=deals&skipitems=0',
  'https://api.xstoregames.com/api/games?list=coming&skipitems=0',
  'https://api.xstoregames.com/api/games?list=best&skipitems=0',
  'https://api.xstoregames.com/api/games?list=most&skipitems=0',
  'https://api.xstoregames.com/api/games?list=free&skipitems=0',
];

this.addEventListener('install', async (eve) => {
  this.skipWaiting();
  eve.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    cache.addAll(precacheResources);
  })());
});

this.addEventListener('activate', eve => {
  eve.waitUntil((async () => {
    clients.claim();
    // if (this.registration.navigationPreload) {
    //   await this.registration.navigationPreload.enable();
    // }
  })());
});

this.addEventListener('fetch', (eve) => {
  // console.log('Fetch intercepted for:', eve.request.url);
  // if (eve.request.url.startsWith('chrome-extension://')) {
  //   eve.respondWith(new Response(null, { status: 404 }));
  // }

  // eve.respondWith(fetch(eve.request));

  eve.respondWith((async () => {
    const cachedResponse = await caches.match(eve.request);
    if (cachedResponse) {
      fetch(eve.request).then(async (networkResponse) => {
        const cache = await caches.open(cacheName);
        await cache.put(eve.request, networkResponse.clone());
      });
      return cachedResponse;
    }

    // const response = await eve.preloadResponse;
    // if (response) { return response; }

    return fetch(eve.request);
  })());
});

this.addEventListener('notificationclick', eve => {
  eve.notification.close();
  eve.waitUntil(
    clients.openWindow(eve.notification.data.url)
  );
});

const gameXboxURL = (id) => `https://api.xstoregames.com/api/games?id=${id}`;
function slugify(str) {
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

this.addEventListener('periodicsync', async (eve) => {
  if (eve.tag === 'check-deals') {
    const notifStatus = await navigator.permissions.query({
      name: 'notifications',
    });

    if (notifStatus.state !== 'granted') {
      return;
    }

    const iddb = indexedDB.open('wishlist', 1);
    iddb.onsuccess = eve => {
      const db = eve.target.result;
      db
        .transaction('wishlist', 'readonly')
        .objectStore('wishlist')
        .getAll()
        .onsuccess = async (eve) => {
          const games = eve.target.result;
          if (!games.length) {
            return;
          }
          const wishlist = games.map((g) => g.id).join(',');
          const wish = await fetch(gameXboxURL(wishlist)).then(res => res.json());
          const deals = games.filter((g) => wish.find((a) => a.id === g.id && a.price.deal < g.amount));

          if (deals.length) {
            this.registration.showNotification(`¡Nuevas ofertas!`, {
              icon: `${this.registration.scope}src/assets/favicon.png`,
              badge: `${this.registration.scope}src/assets/favicon.png`,
              body: `Encontramos ofertas para tus juegos favoritos.`,
              data: {
                url: `${this.registration.scope}wishlist`,
              },
            });
          }

        };
    };
  }
});
