var motification;
addEventListener('load',function(){
    Notification.requestPermission().then(function(result) {
       if(result=='granted'){
           motification=new Notification("HELLO",{body:"Im dying"});
           motification.onclick = function(event) {
            event.preventDefault(); // prevent the browser from focusing the Notification's tab
            window.open('http://localhost/trial/notifiication/index.html?body=hahahaha');
        }

       }
      });
})
var url=new URL(window.location.href);
if(url.searchParams.get("body")!=null){
    document.getElementById("subject").innerText=url.searchParams.get("body");
}
