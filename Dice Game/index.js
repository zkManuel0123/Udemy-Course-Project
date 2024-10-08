var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //用随机数生成随机图片路径
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
    heading.innerHTML = "🚩 Player 1 Wins!";
}else if (randomNumber1 < randomNumber2){
    heading.innerHTML = "Player 2 Wins! 🚩";
}else{
    heading.innerHTML = "It's a Draw!";
}
