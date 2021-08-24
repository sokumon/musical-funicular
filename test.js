//     navigator.serviceWorker.getRegistrations().then(function(registrations) {
//     registrations[0].showNotification("HELLO",{body:"Im sleepinh"});
//     self.addEventListener('notificationonclick', function(event) {
//         event.notification.close();
//         clients.openWindow("https://youtu.be/PAvHeRGZ_lA");
//     });
//   });
// Notification.requestPermission().then(function(permit){
//     if(permit=='granted'){
//         motification=new Notification("HELLO",{body:"Im dying"});
//         motification.onclick = function(event) {
//          event.preventDefault(); // prevent the browser from focusing the Notification's tab
//          window.open('http://localhost/trial/notifiication/index.html?subject=DSGT&work=assignment&number=5&');
//      }
//     }
// }
// )

var url=new URL(window.location.href);
if(url.searchParams.get("subject")!=null && url.searchParams.get("work") && url.searchParams.get("number")){
    document.getElementById("subject").innerText=url.searchParams.get("subject");
    document.getElementById("work").innerText=url.searchParams.get("work")+" "+url.searchParams.get("number");
}
// if ('showTrigger' in Notification.prototype) {
//     /* Notification Triggers supported */
//     console.log("supproted");
//     document.getElementById("Status").innerText="i can see"
//     navigator.serviceWorker.getRegistrations().then(function(registrations) {
//         registrations[0].showNotification("HELLO",{    body: 'This notification was scheduled 30 seconds ago',
//         ac});
//     });
//   }else{
//       console.log("not supported")
//   }
  if ('Notification' in window) {
    document.getElementById("Status").innerText="i can see"
  } else {
    // API not supported
    document.getElementById("Status").innerText="i cant see"
  }



