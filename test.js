var motification;
addEventListener('load',function(){
    Notification.requestPermission().then(function(result) {
       if(result=='granted'){
           motification=new Notification("HELLO",{body:"Im dying"});
           motification.onclick = function(event) {
            event.preventDefault(); // prevent the browser from focusing the Notification's tab
            window.open('https://sokumon.github.io/musical-funicular/index.html?subject=DSGT&work=assignment&number=5&');
        }

       }
      });
})
var url=new URL(window.location.href);

if(url.searchParams.get("subject")!=null && url.searchParams.get("work") && url.searchParams.get("number")){
    document.getElementById("subject").innerText=url.searchParams.get("subject");
    document.getElementById("work").innerText=url.searchParams.get("work")+" "+url.searchParams.get("number");

}
