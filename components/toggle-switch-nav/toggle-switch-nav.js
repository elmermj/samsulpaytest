//Buttons
const homeBtn = document.getElementById("home-btn");
const paymentsBtn =  document.getElementById("payments-btn");
const homeBtnMobile = document.getElementById("home-btn-mobile");
const paymentsBtnMobile =  document.getElementById("payments-btn-mobile");

//Containers
const homeBodyContainer = document.getElementById("home-body-container");
const paymentsBodyContainer = document.getElementById("payments-body-container");


homeBtn.addEventListener("click",function(){
    paymentsBodyContainer.style.visibility="hidden";
    homeBodyContainer.style.visibility="visible";
    console.log("HOME");
});

paymentsBtn.addEventListener("click",function(){
    paymentsBodyContainer.style.visibility="visible";
    homeBodyContainer.style.visibility="home";
    console.log("FINANCE");
});

homeBtnMobile.addEventListener("click",function(){
    paymentsBodyContainer.style.visibility="hidden";
    homeBodyContainer.style.visibility="visible";
    console.log("HOME");
});

paymentsBtnMobile.addEventListener("click",function(){
    paymentsBodyContainer.style.visibility="visible";
    homeBodyContainer.style.visibility="home";
    console.log("FINANCE");
});
