const parentCard1 = document.getElementById("parent-card-1");
const parentCard2 = document.getElementById("parent-card-2");
const homeBodyContainer = document.getElementById("home-body-container");
const spinningPlusIcon = document.getElementById("spinning-plus-icon");
const addCards = document.getElementById("add-cards");
parentCard1.style.opacity = "1.0";
parentCard1.style.transitionDelay= "1s";

let weight=0;
let defaultMarginLeftSide = parentCard1.style.width;
let defaultMarginRightSide = parentCard2.style.width;

addCards.addEventListener("click",function() {
    const minWidth = document.documentElement.clientWidth || window.innerWidth;
    if(weight==0){
        minWidth>900?parentCard1.style.marginLeft="10%":parentCard1.style.position="relative";
        minWidth>900?parentCard2.style.marginRight="10%":parentCard2.style.position="relative";
        parentCard2.style.opacity = "1.0";
        parentCard1.style.transitionDelay= "0s";
        spinningPlusIcon.style.transform="rotate(315deg)";
        // addCards.className.add("active");
        weight++;
    }else{
        minWidth>900?parentCard1.style.marginLeft = defaultMarginLeftSide:parentCard1.style.position="absolute";;
        minWidth>900?parentCard2.style.marginRight= defaultMarginRightSide:parentCard2.style.position="absolute";;
        parentCard2.style.opacity = "0";
        parentCard1.style.transitionDelay= "0s";
        spinningPlusIcon.style.transform="rotate(-360deg)";
        // addCards.className.remove("active");
        weight--;
    }
})