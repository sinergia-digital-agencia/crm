const CACHE = 'sd-crm-v1';
const ASSETS = ['/', '/crm/', '/crm/index.html'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {}))));
self.addEventListener('fetch', e => {
  if (e.request.url.includes('script.google.com')) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
