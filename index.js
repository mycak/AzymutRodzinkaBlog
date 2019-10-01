/* --------------- STARTING PAGE ----------------- */
var inputChecked = document.getElementById("slide-0-trigger");

function callback(inputChecked){
    return function(){
      inputChecked.checked = true;
    }
}

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


/* -------------- BUTTONS HIDING CONTENT -------- */
var buttonsExit = document.querySelectorAll(".exit-icon");
var buttonsBack = document.querySelectorAll(".button-click");
for (var buttonBack of buttonsBack) {
    buttonBack.addEventListener('click', returnOpacity(myElement))
  }
for (var buttonExit of buttonsExit) {
  buttonExit.addEventListener('click', returnOpacity(myElement));
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

// Hide Menu
var containerMenu = document.querySelector(".container-menu");
var buttonsMenu = document.querySelectorAll(".grid-button, .grid-button-2");
var btnsMenu = document.querySelectorAll(".grid");

for (var btnMenu of btnsMenu){
  btnMenu.addEventListener('click', hideButtons(buttonsMenu));
  }
function hideButtons (buttonsMenu) {
  return function(){
    for (var buttonMenu of buttonsMenu) {
      buttonMenu.style.top = "-300%";
      buttonMenu.style.transition = "top 1s .1s ease-out, transform 5s ";
      containerMenu.style.top = "-100%";
      containerMenu.style.transition = " top .65s 1s ease-out";
    }
  }}
  // SHOW Menu
document.querySelector(".button-click-menu").addEventListener('click', showButtons(buttonsMenu));
document.querySelectorAll(".exit-icon-menu").forEach (icon => (
  icon.addEventListener('click', showButtons(buttonsMenu)))
);

function showButtons (buttonsMenu) {
  return function(){
    for (var buttonMenu of buttonsMenu) {
      buttonMenu.style.top = "0";
      buttonMenu.style.transition = "top .65s 1.4s ease-out, transform 1s;opacity 1s";
      containerMenu.style.top = "0";
      containerMenu.style.transition = "top .65s .7s ease-out";
      document.querySelectorAll(".relations-buttons, .onas-container, .dzidzia-container, .galeria-container").forEach (hideclass => {hideclass.style.top = "-100%"; hideclass.style.transition = "top .65s .1s ease-out"});
      }
  }}



/*-- fIRST BUTTON --*/
document.getElementById("button-1-menu").addEventListener('click', function(){
  document.querySelector(".onas-container").style.top = "0";
  document.querySelector(".onas-container").style.transition = "top .65s 1.7s ease-out";
});

/*-- SECOND BUTTON --*/


  //SHow div

document.getElementById("button-2-menu").addEventListener('click', function(){
  document.querySelector(".relations-buttons").style.top = "0";
  document.querySelector(".relations-buttons").style.transition = "top .65s 1.7s ease-out";
  });

/*-- THIRD BUTTON --*/


document.getElementById("button-3-menu").addEventListener('click', function(){
  document.querySelector(".dzidzia-container").style.top = "0";
  document.querySelector(".dzidzia-container").style.transition = "top .65s 1.7s ease-out";
  });

/*-- FOURTH BUTTON --*/

document.getElementById("button-4-menu").addEventListener('click', function(){
  document.querySelector(".galeria-container").style.top = "0";
  document.querySelector(".galeria-container").style.transition = "top .65s 1.7s ease-out";
  });


