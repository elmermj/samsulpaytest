import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js'

import {
    getAuth, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js'

import { 
    getDatabase, 
    set, 
    ref, 
    update 
}from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpjs5mJGfD0xC_J18cZbgfyYBBh-ehkhU",
    authDomain: "samsulpaytest.firebaseapp.com",
    projectId: "samsulpaytest",
    storageBucket: "samsulpaytest.appspot.com",
    messagingSenderId: "651529991268",
    appId: "1:651529991268:web:c91369997729b6d1059b71",
    measurementId: "G-6XHZZTVXD3",
    databaseURL: "https://samsulpaytest-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("registerBtn");
var alertMessage = document.getElementById("alertMessage");
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

registerBtn.addEventListener("click",function register(){
    personalName = document.getElementById("personalNameRegister").value;
    email = document.getElementById("emailRegister").value;
    password = document.getElementById("passwordRegister").value;
    confPassword = document.getElementById("confirmRegister").value;
    alertMessage = document.getElementById("alertMessageReg");
    const now = new Date();
    let formattedDate = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+'  '+months[now.getMonth()]+', '+now.getDate()+' '+now.getFullYear();
    console.log(personalName+" "+email);
    if(validateEmail(email)==false){
        alertMessage.innerHTML = 'Wrong email format'
    }
    else if(validatePassword(password)==false){
        alertMessage.innerHTML = 'Password must be at least 8 characters'
    }
    else if(confirmPassword(password, confPassword)==false){
        alertMessage.innerHTML = 'Passwords are not matched'
    }
    else{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                const user = userCredential.user;
                set(ref(database, "users/" + user.uid), {
                    name: personalName,
                    email: email,
                    lastLogin: formattedDate
                }).then(()=>{
                    console.log('User created \n User details:\n'+user.toString());
                }).catch((error)=>{alert(error)})
                alertMessage.innerHTML = 'Account successfully created';
            }
        ).catch(
            function(error){
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log('Error Code: '+errorCode+' | Error message: '+errorMessage);
        })
    }
});

loginBtn.addEventListener("click", (e) => {
    let emailSignin = document.getElementById("emailInput").value;
    let passwordSignin = document.getElementById("passwordInput").value;
    const now = new Date();
    let formattedDate = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+'  '+months[now.getMonth()]+', '+now.getDate()+' '+now.getFullYear();
    signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
    .then((userCredential) => {
    // Signed in
        const user = userCredential.user;
        let lastLogin = formattedDate.toString();
        update(ref(database, "users/" + user.uid), {
            lastLogin: lastLogin
        }).then(() => {
            // Data saved successfully!
            //   alert("user telah sukses login");
            location.href = "http://127.0.0.1:5500/auth_firebase_cdn/admin.html";
        })
        .catch((error) => {
            //the write failed
            alert(error);
        });
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        alertMessage.innerHTML = 'Wrong email/password';
    });

    signOut(auth).then(() => {}).catch((error) => {});
});

function validateEmail(email){
    expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(expression.test(email)==true){
        return true;
    }else{
        return false;
    }
}

function validatePassword(password){
    if(password < 8){
        return false;
    }else{
        return true;
    }
}

function confirmPassword(password, confPassword){
    if (password == confPassword){
        return true;
    }else{
        return false;
    }
}