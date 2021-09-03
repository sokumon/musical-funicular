importScripts("https://www.gstatic.com/firebasejs/4.9.1/firebase.js");
const firebaseConfig = {
    apiKey: "AIzaSyB0XYkzNTnwa8qry5JiuG-15_-9BC46WVo",
    authDomain: "push-notifications-101-4ab49.firebaseapp.com",
    projectId: "push-notifications-101-4ab49",
    storageBucket: "push-notifications-101-4ab49.appspot.com",
    messagingSenderId: "717699904904",
    appId: "1:717699904904:web:4c6496276327474de0763d"
  };
 const app= firebase.initializeApp(firebaseConfig);
const messaging=app.messaging();
self.addEventListener('push',function(payload){
    console.log("hahahahh it is here ")
    console.log(payload);
})
