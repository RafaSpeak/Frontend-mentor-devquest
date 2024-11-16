document.addEventListener("DOMContentLoaded", function() {
    const videoLink = document.getElementById("show-video-link");
    const videoButton = document.getElementById("show-video-button"); // Seleciona o botão
    const videoContainer = document.getElementById("video-container");

    // Verifica se o link do vídeo existe e adiciona o evento
    if (videoLink) {
        videoLink.addEventListener("click", function(event) {
            event.preventDefault();  // Evita que a página seja recarregada ao clicar no link
            videoContainer.style.display = "block";  // Exibe o vídeo
        });
    }

});

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/style.css',
          '/js/rafael.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  