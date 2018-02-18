var Letter = require("./letter.js");

function Word() {
	this.new = [];
	this.displayWord = function() {
		for (var i = 0; i < this.new.length; i++) {
			console.log(this.new[i])
			// var placeholder= new Letter(this.new[i]);
			// placeholder.displayLetter();	
		}
	}
}

var test = new Word()
// console.log(test.displayWord())


module.exports = Word;