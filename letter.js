function Letter(character){
	this.character = character;
	this.beenGuessed = false;
	this.displayLetter = function(){
		if(this.beenGuessed){
			console.log(this.character);
		}
		else{ 
		console.log("_");
		}
	};
	this.guess = function(character){
		if(char === this.character) {
			this.beenGuessed = true;
		}
	};
};

module.exports = Letter;

