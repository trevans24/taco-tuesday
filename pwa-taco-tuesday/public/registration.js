if ('serviceWorker' in navigator) {
    navigator.serviceWorker
   .register('./service-worker.js')
   .then(function() {
    console.log('Service Worker Registered'); 
  });
} else {
  console.log('Service Worker Not Supported');
}