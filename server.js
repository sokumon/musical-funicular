function getData(){
  fetch("https://script.google.com/macros/s/AKfycbyqad9jc_M8rawLUWFooE_5iwxZw2JxpveR3ernVJ5qh9ftQMQ3niK4KHe6SDgxrjDA/exec?username=100").then(res=>{
    res.json().then(data => {
      if(data.number==186){
        console.log(data.number);
      }
    });
  })
}
setInterval(getData(),30000);
