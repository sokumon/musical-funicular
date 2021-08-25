self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  clients.openWindow('https://sokumon.github.io/musical-funicular/index.html?subject=DSGT&work=assignment&number=5&');
});