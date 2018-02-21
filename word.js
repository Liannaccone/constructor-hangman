var Letter = require("./letter.js");


function Word(word) {
	this.new = word.split("");
	this.displayArr = [];
	this.displayWord = function() {
		if(this.displayArr.length < 1) {
			for (var i = 0; i < this.new.length; i++) {
				var placeholder= new Letter(this.new[i]);
				this.displayArr.push(placeholder);
			}
		}
		console.log(this.displayArr.join(" "))
	};
	this.checkGuess = function(character) {
		for (var i = 0; i < this.displayArr.length; i++) {
			this.displayArr[i].guess(character);
		}
	}
};

module.exports = Word;