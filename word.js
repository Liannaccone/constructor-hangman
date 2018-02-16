var Letter = require("./letter.js");

function Word() {
	this.new = [];
	this.displayWord = function() {
		for (var i = 0; i < this.new.length; i++) {
			var new Letter(this.new[i])
			
		}
	}
}