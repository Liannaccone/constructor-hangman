function Letter(character){
	this.character = character;
	this.beenGuessed = false;
	this.displayLetter = function(){
		if(this.beenGuessed){
			return this.character;
		}
		else{ 
		return " _ ";
		}
	};
	this.check = function(char){
		if(char === this.character) {
			this.beenGuessed = true;
		}
	};
};

module.exports = Letter;

