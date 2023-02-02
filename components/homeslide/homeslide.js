function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}
  
function vw(percent) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
}
const minWidth = document.documentElement.clientWidth || window.innerWidth;

const welcome = document.getElementById("welcome");
const profileName = document.getElementById("profileName");



if(minWidth>900){
    welcome.style.opacity = "1.0";
    welcome.style.paddingRight = "25%";
    profileName.style.opacity = "1.0";
    profileName.style.transitionDelay= "1s";
    profileName.style.paddingLeft = "10%";
}else{
    welcome.style.opacity = "1.0";
    welcome.style.paddingRight= "35%";
    profileName.style.opacity = "1.0";
    profileName.style.transitionDelay= "1s";
    profileName.style.paddingLeft = "15%";
}