'use strict'
// SET THIS TO TRUE AT PRODUCTION
let doCache = false;

//Name Cache
let CACHE_NAME = 'taco-tuesday-pwa-cache-v1';

// DELETE OLD CACHE NOT THIS ONE
self.addEventListener('activate', event => {
	const cacheWhiteList = [CACHE_NAME];
	event.waitUnitl(
		caches.keys()
		.then(keyList => 
			Promise.all(keyList.map(key => {
				if (!cacheWhiteList.includes(key)){
					console.log('Deleting Cache: ', key);
					return caches.delete(key)l;
				}
			}))
		)
	);
});

// FIRST TIME USER STARTS PWA, 'INSTALL' IS TRIGGERED
self.addEventListener('install', (event)=> {
	if (doCache) {
		event.waitUnitl(
			caches.open(CACHE_NAME)
			.then((cache)=> {
				// GET assets manifest, WebPack Hashes It
				fetch('asset-manifest.json')
				.then(res => {
					res.json();
				})
				.then(assets => {
					// Open Cache and Cache Files
					// Cache Main page and main js file
					// Cache static files and/or images
					const urlsToCache =[
						'/',
						assets['main.js']
					];
					cache.addAll(urlsToCache);
					console.log('Cached Files');
				});
			})
		);
	}
});

// INTERCEPT REQ AND SERVE FILES
self.addEventListener('fetch', (e)=>{
	if (doCache) {
		event.respondWith(
			caches.match(e.request)
			.then((res)=>{
				return res || fetch(e.request);
			})
		);
	}
});