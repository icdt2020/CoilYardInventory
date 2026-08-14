// Minimal service worker — required by Chrome/Android for the app to be
// installable and eligible to register as a Share Target.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass-through: always fetch from network. No offline caching yet.
  event.respondWith(fetch(event.request));
});
