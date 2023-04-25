// Getting random number
// Here multiplied 6 to random function because we want maximum 
// random number upto 6 and min random number upto 1 therefore added 1.

var randomNumber1 = Math.floor(Math.random()*6)+1; //1 - 6



// Getting random image from Random number using string concatenation
var randomImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png




//Changing source attribute of the image element
var randomImgsource1 = "images/"+randomImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImgsource1);




var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImgsource2 = "images/"+randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImgsource2);


//If match draw
if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!"
// If player1 wins    
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins!🚩"
    // player2 wins
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins!🚩"
}


