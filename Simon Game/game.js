let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let level = 0;

let started = false;

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level); //添加空格

    nextSequence();

    started = true;
  }
});

$(".btn").on("click", function () {
  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1); //用户点击的最后一个颜色的索引，以检查最近一次点击的颜色索引是否与gamePattern匹配
});

function nextSequence() {

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);

    playSound(randomChosenColour);      
}

function playSound(name){
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){

  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");

    $("body").addClass("game-over"); //jQuery选择HTML元素时，要以字符串的形式传递给jQuery
                                     //"game-over"而不是".game-over"，因为不是选择器，只传递字符串

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game over, Press Any Key to Restart");

    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}




