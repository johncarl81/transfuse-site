var cacheName = 'WWw-TRANSFUSE-V1';
var filesToCache = [
    '/',
    '/js/main.js',
    '/css/transfuse.css',
    '/images/icon.png',
    '/documentation.html',
    '/getting_started.html',
    '/index.html'
];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.info('[sw.js] cached all files');
            return cache.addAll(filesToCache);
        })
    );
});
