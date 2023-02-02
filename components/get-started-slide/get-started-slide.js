const button1 = document.getElementById("get-started-button1");
const button2 = document.getElementById("get-started-button2");
const button3 = document.getElementById("get-started-button3");
const div = document.getElementById("right-part-container");
const pullOutRegisterBtn = document.getElementById("register-button");
const registrationForm = document.getElementById("registration-form");
const pullOutLoginBtn = document.getElementById("login-button");
const loginForm = document.getElementById("login-form");
const reverseRow = document.getElementById("reversible");
const blackBarProgress = document.getElementById("black-bar-progress");
var header = document.getElementById("myHeader");
var leftHeader = document.getElementById("leftHeader");
var sticky = header.offsetTop;
var registerActive = false;
var loginActive = false;

button1.addEventListener("click", function() {

  div.style.paddingLeft = 0;
  div.style.position = "relative";

  button2.style.visibility = "visible";
  button1.style.visibility = "hidden";

});

button2.addEventListener("click", function() {

  div.style.paddingLeft = "50%";
  div.style.position = "relative";

  button1.style.visibility = "visible";
  button2.style.visibility = "hidden";

  registrationForm.style.marginLeft = "150%";
  pullOutRegisterBtn.style.backgroundColor="white";
  pullOutRegisterBtn.style.color="black";

  loginForm.style.marginLeft = "150%";
  pullOutLoginBtn.style.backgroundColor="white";    
  pullOutLoginBtn.style.color="black";

  reverseRow.style.flexDirection ="row";
  registerActive = false;
  loginActive = false;

  // blackBarProgress.style.display = "flex";
  blackBarProgress.style.visibility = "visible";
});

window.onscroll = function() {stickyHeaderFunction()};


function stickyHeaderFunction() {

  if (window.pageYOffset > sticky) {

    header.classList.add("sticky");
    leftHeader.classList.add("visible");

  } else {

    header.classList.remove("sticky");
    leftHeader.classList.remove("visible");

  }
}

var weight = 0;
pullOutRegisterBtn.addEventListener("click",function(){
  const minWidth = document.documentElement.clientWidth || window.innerWidth;

  if(weight==0){
    minWidth>900?registrationForm.style.marginLeft = "75%":registrationForm.style.marginLeft = 0;

    // pullOutRegisterBtn.classList.add("active-btn");
    pullOutRegisterBtn.style.backgroundColor="black";    
    pullOutRegisterBtn.style.color="#4adbff";
    
    reverseRow.style.flexDirection ="row-reverse";
    weight=1;
    console.log(weight);
    console.log("CASE 1 weight : "+weight);
  }
  else if(weight==2){
    loginForm.style.marginLeft = "150%";
    minWidth>900?registrationForm.style.marginLeft = "75%":registrationForm.style.marginLeft = 0;
    
    // pullOutLoginBtn.classList.remove("active-btn");
    // pullOutRegisterBtn.classList.add("active-btn");
    pullOutLoginBtn.style.backgroundColor="white";    
    pullOutLoginBtn.style.color="black";
    pullOutRegisterBtn.style.backgroundColor="black";    
    pullOutRegisterBtn.style.color="#4adbff";
    
    reverseRow.style.flexDirection ="row-reverse";
    weight=1;
    console.log("CASE 2 weight : "+weight);
  }
  else{
    registrationForm.style.marginLeft = "150%";

    // pullOutRegisterBtn.classList.remove("active-btn");
    pullOutRegisterBtn.style.backgroundColor="white";
    pullOutRegisterBtn.style.color="black";
    reverseRow.style.flexDirection ="row";
    console.log("CASE 3 weight : "+weight);
    weight=0;
  }

  // (minWidth>900 && weight!=0)?blackBarProgress.style.display = "flex":blackBarProgress.style.display = "none";
  (minWidth>900 && weight!=0)?blackBarProgress.style.visibility = "visible":blackBarProgress.style.visibility = "hidden";
});

pullOutLoginBtn.addEventListener("click",function(){
  const minWidth = document.documentElement.clientWidth || window.innerWidth;
  if(weight==0){
    minWidth>900?loginForm.style.marginLeft = "75%":loginForm.style.marginLeft = 0;
    // pullOutLoginBtn.classList.add("active-btn");
    pullOutLoginBtn.style.backgroundColor="black";
    pullOutLoginBtn.style.color="#4adbff";

    reverseRow.style.flexDirection ="row";
    weight=2;
    console.log(weight);
  }
  else if(weight==1){
    minWidth>900?loginForm.style.marginLeft = "75%":loginForm.style.marginLeft = 0;
    registrationForm.style.marginLeft = "150%";

    // pullOutLoginBtn.classList.add("active-btn");
    pullOutLoginBtn.style.backgroundColor="black";
    pullOutLoginBtn.style.color="#4adbff";
    // pullOutRegisterBtn.classList.remove("active-btn");
    pullOutRegisterBtn.style.backgroundColor="white";
    pullOutRegisterBtn.style.color="black";

    reverseRow.style.flexDirection ="row";
    weight=2;
    console.log("CASE 5 weight : "+weight);
  }  
  else{
    loginForm.style.marginLeft = "150%";

    // pullOutLoginBtn.classList.remove("active-btn");
    pullOutLoginBtn.style.backgroundColor="white";    
    pullOutLoginBtn.style.color="black";

    reverseRow.style.flexDirection ="row";
    weight=0;
    console.log("CASE 6 weight : "+weight);
  }
  // (minWidth>900 && weight!=0)?blackBarProgress.style.display = "flex":blackBarProgress.style.display = "none";
  (minWidth>900 && weight!=0)?blackBarProgress.style.visibility = "visible":blackBarProgress.style.visibility = "hidden";
});