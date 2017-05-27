if ('serviceWorker' in navigator) {
  window.addEventListener('load', ()=>{
    navigator.serviceWorker
    .register('service-worker.js')
    .then((registration)=>{
            //Registration was successful
            console.log('ServiceWorker Registration Successful: ', registration);
          }, (err)=>{
            //Failed Registration
            console.log('ServiceWorker Registration Failed: ', err);
          })
    .catch((err)=>{
      console.log(err);
    });
  });
} else {
  console.log('Service Worker is not supported');
}