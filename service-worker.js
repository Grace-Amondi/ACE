// var cacheName = 'ace-app';
// var dataCacheName = 'ace-app';
// var filesToCache = [
//   '/',
//   '/index.html',
//   '/lib',
//   '/images',
//   '/public',
//   '/app.js',
//   '/app_api',
//   '/app_server',
//   '/app_client/app.js',
//   '/app_client/home/home.controller.js',
//   '/app_client/home/home.view.html',
//   '/app_client/about/about.controller.js',
//   '/app_client/auth/login/login.controller.js',
//   '/app_client/auth/login/login.view.html',
//   '/app_client/auth/register/register.view.html',
//   '/app_client/auth/register/register.controller.js',
//   '/app_client/locationDetail/locationDetail.controller.js',
//   '/app_client/reviewModal/reviewModal.controller.js',
//   '/app_client/common/services/authentication.service.js',
//   '/app_client/common/services/geolocation.service.js',
//   '/app_client/common/services/loc8rData.service.js',
//   '/app_client/common/filters/formatDistance.filter.js',
//   '/app_client/common/filters/addHtmlLinebreaks.filter.js',
//   '/app_client/common/directives/navigation/navigation.controller.js',
//   '/app_client/common/directives/navigation/navigation.directive.js',
//   '/app_client/common/directives/navigation/navigation.template.html',
//   '/app_client/common/directives/footerGeneric/footerGeneric.directive.js',
//   '/app_client/common/directives/footerGeneric/footerGeneric.template.html',
//   '/app_client/common/directives/pageHeader/pageHeader.directive.js',
//   '/app_client/common/directives/pageHeader/pageHeader.template.html',
//   '/app_client/common/directives/ratingStars/ratingStars.directive.js',
//   '/app_client/common/directives/ratingStars/ratingStars.template.html',
//   '/app_client/common/views/genericText.view.html'
// ];
// var aceapp = 'https://calm-dawn-52163.herokuapp.com/';
//
// self.addEventListener('install', function(e) {
//   console.log('[ServiceWorker] Install');
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       console.log('[ServiceWorker] Caching app shell');
//       return cache.addAll(filesToCache);
//     })
//   );
// });
//
// self.addEventListener('activate', function(e) {
//   console.log('[ServiceWorker] Activate');
//   e.waitUntil(
//     caches.keys().then(function(keyList) {
//       return Promise.all(keyList.map(function(key) {
//         if (key !== cacheName && key !== dataCacheName) {
//           console.log('[ServiceWorker] Removing old cache', key);
//           return caches.delete(key);
//         }
//       }));
//     })
//   );
// });
//
// self.addEventListener('fetch', function(e) {
//   if (e.request.url.startsWith(aceapp)) {
//     e.respondWith(
//       fetch(e.request)
//         .then(function(response) {
//           return caches.open(dataCacheName).then(function(cache) {
//             cache.put(e.request.url, response.clone());
//             console.log('[ServiceWorker] Fetched & Cached', e.request.url);
//             return response;
//           });
//         })
//     );
//   } else {
//     e.respondWith(
//       caches.match(e.request).then(function(response) {
//         console.log('[ServiceWorker] Fetch Only', e.request.url);
//         return response || fetch(e.request);
//       })
//     );
//   }
// });
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
