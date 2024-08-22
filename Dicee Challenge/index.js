//random number for Player1 dice
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

var randomImageSource1 = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImageSource1); 


//random number for Player2 dice
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
console.log(randomNumber2);

var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSource2);


//functon to check for which player wins
function getResult() {
    if (randomNumber1 > randomNumber2) {
        return "🚩Player 1 wins!";
    } else if (randomNumber2 > randomNumber1) {
        return "Player 2 wins!🚩";
    } else {
        return "It's a Draw!";
    }
}

// Updating the h1 element with the result
document.querySelector("h1").textContent = getResult();


