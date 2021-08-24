navigator.serviceWorker.getRegistrations().then(function(registrations) {
    registrations[0].showNotification("HELLO",{body:"Im sleepinh"});
    self.addEventListener('notificationonclick', function(event) {
        event.notification.close();
        clients.openWindow("https://youtu.be/PAvHeRGZ_lA");
    }, false);
  });
var url=new URL(window.location.href);
if(url.searchParams.get("subject")!=null && url.searchParams.get("work") && url.searchParams.get("number")){
    document.getElementById("subject").innerText=url.searchParams.get("subject");
    document.getElementById("work").innerText=url.searchParams.get("work")+" "+url.searchParams.get("number");
}
