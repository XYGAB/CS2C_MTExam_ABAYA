const ps = require("prompt-sync");
const prompt = ps();

let theFavNumber = 3; // Your favorite number
let guess = 0;

while (guess !== theFavNumber) {
    guess = prompt("Guess my favorite number:");
    guess = parseInt(guess);

    if (guess < theFavNumber) {
        console.log("Too low! Try again.");
    } else if (guess > theFavNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Correct! You guessed it!");
    }
}