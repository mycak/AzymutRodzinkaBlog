/* --------------- STARTING PAGE ----------------- */


function callback(inputChecked){
    return function(){
      inputChecked.checked = true;
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
        element.style.top = "-50%";
        element.style.transition = "opacity 1s, top 1s";
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
       for ( var element of myElement) {
        element.style.opacity = ".6 ";
        element.style.top = "0";
        element.style.transition = "all .5s .5s";
       }
      for ( var elementContent of myElementContent) {
        elementContent.style.opacity = "0";
        elementContent.style.transition = "opacity .7s";
      }
    }
}
/* ------- MENU SECTIONS ---------*/
var inputCheckedMenu_1 = document.getElementById("slide-1-menu");
document.getElementById("button-1-menu").addEventListener("click", callback(inputCheckedMenu_1)
  );

var inputCheckedMenu_2 = document.getElementById("slide-1-menu");
document.getElementById("button-2-menu").addEventListener("click", callback(inputCheckedMenu_2)
    );

var inputCheckedMenu_3 = document.getElementById("slide-1-menu");
document.getElementById("button-3-menu").addEventListener("click", callback(inputCheckedMenu_3)
  );

var inputCheckedMenu_4 = document.getElementById("slide-1-menu");
document.getElementById("button-4-menu").addEventListener("click", callback(inputCheckedMenu_4)
    );