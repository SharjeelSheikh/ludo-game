// var numberOfButton = document.querySelectorAll(".drum").length;
// for (i = 0; i < numberOfButton; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", onClick);
//     function onClick() {
//         var buttonInnerHTML = this.innerHTML;
//         switch (buttonInnerHTML) {
//             case "w":
//                 var crash = new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;
//             case "a":
//                 var kickbass = new Audio("sounds/kick-bass.mp3");
//                 kickbass.play();
//                 break;
//             case "s":
//                 var snare = new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;
//             case "d":
//                 var tom1 = new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;
//             case "j":
//                 var tom2 = new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;
//             case "k":
//                 var tom3 = new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;
//             case "l":
//                 var tom4 = new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;
//             default: console.log(buttonInnerHTML);
//         }
//     }
// }


// detect the buttonpress
var numberOfButton = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfButton; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", onClick);

    function onClick() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
}

// detect the keypress
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "p":
            var Piano = new Audio("sounds/Piano.mp3");
            Piano.play();
            break;
        default:
            console.log(keyInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed"), 100;
    })
}