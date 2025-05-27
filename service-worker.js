self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('eco-trace-cache').then((cache) => {
        return cache.addAll([
          'index.html',
          'login.html',
          'signup.html',
          'dashboard.html',
          'calculator.html',
          'ecotrace.jpg'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request);
      })
    );
  });
  