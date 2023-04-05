
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

let startBtn = document.querySelector("#start-btn")

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

startBtn.addEventListener("click", function() {
  if(!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
})

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}

function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//1. Create a new function called startOver().
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}

var gdsc = document.querySelector("#logo");
var nav = document.querySelector(".Navbar");
var bits = document.querySelector(".Navbar h1");
var bar = document.querySelector(".rectangle");
var lvl = document.querySelector("#level-title");

window.addEventListener("scroll", e => {
  var scroll = this.scrollY;
  console.log(scroll);
  if (scroll > 50) {
    gdsc.style.height = "7vw";
    gdsc.style.width = "30vw";

    // bar.style.opacity = 0;
    // bar.style.marginTop = "20px";
    bar.style.height = "40px";

    bits.style.fontSize = "1.5rem";
    // bits.style.marginTop = "27px";

    lvl.style.fontSize = "1.25rem";

    nav.style.height = "4vw";

  }
  else {
    gdsc.style.height = "10vw";
    gdsc.style.width = "50vw";

    bar.style.opacity = 1;
    // bar.style.marginTop = "35px";
    bar.style.height = "50px";

    bits.style.fontSize = "2.75rem";
    // bits.style.marginTop = "35px";

    lvl.style.fontSize = "1.5rem";

    nav.style.height = "auto";

  }
})
