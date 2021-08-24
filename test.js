
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js');
}else{

}
var url=new URL(window.location.href);
if(url.searchParams.get("subject")!=null && url.searchParams.get("work") && url.searchParams.get("number")){
    document.getElementById("subject").innerText=url.searchParams.get("subject");
    document.getElementById("work").innerText=url.searchParams.get("work")+" "+url.searchParams.get("number");

}
