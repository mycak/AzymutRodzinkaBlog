
var inputZeroChecked = document.getElementById("slide-0-trigger");


/* --------------- STARTING PAGE ----------------- */
function callback(inputZeroChecked){
    return function(){
      inputZeroChecked.checked = true;
    }
}

setTimeout(callback(inputZeroChecked), 800);

/* ------------- FIRST VIEW PAGE -------------------- */

var inputMenuChecked = document.getElementById("slide-menu-trigger");
document.getElementById("buttonZero").addEventListener("click", callback(inputMenuChecked));
  ;

/* ------------- BUTTONS SHOWING CONTENT ------------- */

var myElement = document.querySelectorAll(".container");
var myElementContent = document.querySelectorAll(".relations-content");
var buttons = document.querySelectorAll(".button-content")

buttons.forEach( button =>
  button.addEventListener('mousemove', function() {
    setTimeout(getOut(myElement),500);
  })
)
buttons.forEach( button =>
  button.addEventListener('click', getOut(myElement))
  )

function getOut(myElement){
    return function(){
       myElement.forEach(element => {
        element.style.opacity = "0";
        element.style.top = "-50%";
        element.style.transition = "opacity 1s, top 1s";
       })

       myElementContent.forEach(elementContent =>  {
        elementContent.style.opacity = "1";
        elementContent.style.transition = "opacity 1s .7s";
       }) 
    }
}


/* -------------- BUTTONS HIDING CONTENT -------- */
var buttonsExit = document.querySelectorAll(".exit-icon");

buttonsExit.forEach(buttonExit => (
  buttonExit.addEventListener('click', () => {
    returnOpacity(myElement),
    setTimeout(callback(inputMenuChecked), 550)
  })
));

var buttonsBack = document.querySelectorAll(".button-click");

buttonsBack.forEach ( buttonBack => (
    buttonBack.addEventListener('click', () => {
    return returnOpacity(myElement)}
    )));

function returnOpacity(myElement){
   
      myElement.forEach(element => (
        element.style.opacity = ".6 ",
        element.style.top = "0",
        element.style.transition = "all .5s .5s"
       ));
      myElementContent.forEach ( elementContent => (
        elementContent.style.opacity = "0",
        elementContent.style.transition = "opacity .7s"
      ))
    
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
      buttonMenu.style.transition = "top 1s .1s ease-out, transform 2s ";
      containerMenu.style.top = "-100%";
      containerMenu.style.transition = "top .65s 1s ease-out, transform 2s";
    }
  }}
  // SHOW Menu
document.querySelector(".button-click-menu").addEventListener('click', () => {
  showButtons(buttonsMenu),
  returnOpacity(myElement);
})

document.querySelectorAll(".exit-icon-menu").forEach (icon => (
  icon.addEventListener('click', () => {
    return showButtons(buttonsMenu)})
));

function showButtons (buttonsMenu) {
      buttonsMenu.forEach(buttonMenu => {
      buttonMenu.style.top = "0";
      buttonMenu.style.transition = "top .65s .7s ease-out,opacity 1s, transform 2s";
      containerMenu.style.top = "0";
      containerMenu.style.transition = "top .65s .7s ease-out, transform 2s";
      document.querySelectorAll(".relations-buttons, .onas-container, .dzidzia-container, .galeria-container").forEach (hideclass => {hideclass.style.top = "-100%"; hideclass.style.transition = "top .65s .1s ease-out"});
      })
  }



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


