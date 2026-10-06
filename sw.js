/* Service worker do webchat: necessário para instalar o app e para exibir notificações.
   Não guarda nada em cache (a página e o chat sempre vêm da rede). */

self.addEventListener('install', function() { self.skipWaiting(); });
self.addEventListener('activate', function(e) { e.waitUntil(self.clients.claim()); });

// Exigido por alguns navegadores para considerar o site instalável
self.addEventListener('fetch', function() {});

// Clicar na notificação volta para o chat
self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(lista) {
      for (var i = 0; i < lista.length; i++) {
        if ('focus' in lista[i]) return lista[i].focus();
      }
      return self.clients.openWindow('./index.html');
    })
  );
});
