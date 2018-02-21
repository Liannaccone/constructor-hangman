var Letter = require("./letter.js");
var displayArr = [];

function Word(word) {
	this.new = word.split("");
	this.displayWord = function() {
		if(displayArr.length < 1) {
			for (var i = 0; i < this.new.length; i++) {
				var placeholder= new Letter(this.new[i]);
				displayArr.push(placeholder);
			}
		}
		console.log(displayArr.join(" "))
	};
	this.checkGuess = function(character) {
		for (var i = 0; i < displayArr.length; i++) {
			displayArr[i].guess(character);
		}
	}
};

module.exports = Word;