importScripts("https://www.gstatic.com/firebasejs/7.0.0/firebase.js");
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
self.addEventListener('push',function(){
    self.showNotification("HELLO ANWESHA",{body:"Hi"});
})
