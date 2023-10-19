const CACHE_NAME = "my-pwa-cache";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "icons/apple-touch-icon-120x120-precomposed.png",
  "icons/apple-touch-icon-precomposed.png",
  "/static/css/main.chunk.css",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js",
];

// Install service worker and cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Serve cached files when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((response) => {
          // Cache new files as they're fetched
          caches.open(CACHE_NAME).then((cache) => {
            let clone = response.clone();
            cache.put(event.request, clone);
          });

          return response;
        })
        .catch(() => caches.match("offline.html"));
    })
  );
});

// Clean up old caches when a new service worker is activated
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
