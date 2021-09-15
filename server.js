console.log("hello");
function getData(){
var data;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
         data=JSON.parse(xhttp.responseText);
         if(data.number==186){
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange= function(){
                if (this.readyState == 4 && this.status == 200){
                    console.log("pushed")
                }
            }
            xhttp.open("POST", "push.php", true);
            xhttp.setRequestHeader('Content-Type', 'application/json');
            xhttp.send(JSON.stringify(data.number));   
        }
    }
};
xhttp.open("GET", "https://script.google.com/macros/s/AKfycbyqad9jc_M8rawLUWFooE_5iwxZw2JxpveR3ernVJ5qh9ftQMQ3niK4KHe6SDgxrjDA/exec?username=0", true);
xhttp.send();
}
setInterval(getData,15000);
