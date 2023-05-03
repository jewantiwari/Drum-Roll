
numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // alert("I got clicked!");
var buttonInnerHtml = this.innerHTML;
//DFGDFBHAFDHGA

//    makeSound(buttonInnerHTML);

//     buttonAnimation(buttonInnerHTML);

//   });

// }

// document.addEventListener("keypress", function(event) {

//   makeSound(event.key);

//   buttonAnimation(event.key);

// });






//SDGDFGDFG

switch  (buttonInnerHtml){
  case "w":
    var tom1 = new Audio("Sound/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("Sound/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("Sound/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("Sound/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var snare = new Audio("Sound/snare.mp3");
    snare.play();
    break;

    case "k":
    var crash = new Audio("Sound/crash.mp3");
    crash.play();
    break;

    case "l":
    var kick = new Audio("Sound/kick-bass.mp3");
    kick.play();
    break;

    default: console.log(buttonInnerHtml)


}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
// makes the letter color white when hover on.
  //  this.style.color= "white";
  
    // what to do when click detected.
});
};





  // var audio = new Audio("./Sound/tom-1.mp3");
    // audio.play();