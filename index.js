/* --------------- STARTING PAGE ----------------- */


function callback(inputChecked){
    return function(){
        inputChecked.setAttribute("checked", "");
    }
}

var inputChecked = document.getElementById("slide-0-trigger");

setTimeout(callback(inputChecked), 100);

/* ------------- FIRST VIEW PAGE -------------------- */

inputChecked = document.getElementById("slide-menu-trigger");
document.getElementById("buttonZero").addEventListener("click", callback(inputChecked)
  );

/* ------------- BUTTONS SHOWING CONTENT ------------- */

var myElement = document.querySelectorAll(".container");
var myElementContent = document.querySelectorAll(".relations-content");
var buttons = document.querySelectorAll(".button-content")

for (var button of buttons) {
  button.addEventListener('click', getOut(myElement))
}

function getOut(myElement){
    return function(){
       for ( var element of myElement) {
       element.style.opacity = "0";
       element.style.transition = "opacity 1s";
       }
       for ( var elementContent of myElementContent) {
        elementContent.style.opacity = "1";
        elementContent.style.transition = "opacity 1s .7s";
       }
    }
}


/* -------------- PREVIEW THE TITLE -------- */

var buttonsBack = document.querySelectorAll(".button-click");
for (var buttonBack of buttonsBack) {
    buttonBack.addEventListener('click', returnOpacity(myElement))
  }

function returnOpacity(myElement){
    return function(){
       for ( var element of myElement)
       element.style.opacity = ".6 ";
       element.style.transition = "opacity 5s 4s";
    
      for ( var elementContent of myElementContent) {
      elementContent.style.opacity = "0";
      elementContent.style.transition = "opacity .7s";
      }
    }
}
