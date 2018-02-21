var Word = require("./word.js");
var inquirer = require("inquirer");

var wordArr = ["bodhi", "mallard", "dog"];
var activeWord;
var guessedLettersArr;
var guessesLeft;

function welcomeUser() {
	inquirer.prompt([
	{
		type: "confirm",
		message: "\n * * * * Welcome to Hangman * * * * \n\nEnter 'Y' to begin or 'N' to quit.",
		name: "userStart",
		default: true
	}
	]).then(function(result) {
		if(result.userStart) {
			initializeGame();
			runGame();
		}
	})
};

welcomeUser();



function initializeGame() {
	// randomly select a number between 0 and the length of WordArr - 1
	var randomNum = Math.floor(Math.random() * wordArr.length);
	// assign wordArr[randomNum] to activeWord, displays the word.
	activeWord = new Word(wordArr[randomNum]);
	// empties the guessedLettersArr
	guessedLettersArr = []
	// resets guessesLeft to 10
	guessesLeft = 10;
}

// function displayStats() {

// 	console.log("\nLetters guessed:", guessedLettersArr,
// 				"\nGuesses left:", guessesLeft,
// 				"\n");
// 	activeWord.displayWord();
// 	console.log("\n")
// }

function runGame() {
	console.log("\nLetters guessed:", guessedLettersArr,
				"\nGuesses left:", guessesLeft,
				"\n");
	activeWord.displayWord();
	console.log("\n")
	inquirer.prompt([
	{
		type: "list",
		message: "Which letter would you like to guess?",
		choices: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
		name: "userGuess"
	}
	]).then(function(result){
		if(guessedLettersArr.indexOf(result.userGuess) !== -1){
			console.log("\nLetter has already been guessed, try again.");
			runGame();
		}
		else if (activeWord.new.indexOf(result.userGuess) !== -1) {
			activeWord.checkGuess(result.userGuess);
			console.log("\nCorrect!")
			runGame();
		}
		else{
			guessesLeft--;
			if (guessesLeft > 0) {
				console.log("\nNope, guess again!");
				guessedLettersArr.push(result.userGuess);
				runGame();
			}
			else{
				console.log("\n* * *  GAME OVER  * * *",
							"\nYou are out of guesses!",
							"\nThe correct word is\n");
				promptPlayAgain();
			}
		}
	})
};

function promptPlayAgain() {
	inquirer.prompt([
	{
		type: "confirm",
		message: "\n Would you like to play again? \n\nEnter 'Y' to begin or 'N' to quit.",
		name: "userStart",
		default: true
	}
	]).then(function(result) {
		if(result.userStart) {
			initializeGame();
			runGame();
		}
	})
};

