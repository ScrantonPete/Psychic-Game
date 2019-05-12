// Global Variables/Arrays
// ===============================================

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var wrongGuesses = [];

// Functions - Main Process
// ===============================================

document.onkeyup = function (event) {

    var userGuess = event.key;
    //    selects a random letter
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    if (options.indexOf(userGuess) > -1) {
        //  checks if user guesses letter

        if (userGuess === computerGuess) {
            wins++;
            alert("You win!  Your must be a Psychic! Can you tell me my future?")

            guessesLeft = 9;
            wrongGuesses = [];
        }

        // if letter is wrong, add to wrongGuesses array
        if (userGuess != computerGuess) {
            guessesLeft--;
            wrongGuesses.push(userGuess);
        }
        // checks if guessses left is 0
        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            alert("No guesses left! You're not Psychic!  What's Miss Cleo's phone number?")
            wrongGuesses = [];
        }
        // updates the html counters and arrays
        var html =
            "<h1> The Psychic Game </h1>" +
            "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses so far: " + wrongGuesses.join(",") + "</p>";

        document.querySelector("#game").innerHTML = html;


    }
};