function Letter(character){
	this.character = character;
	this.beenGuessed = false;
	this.toString = function(){
		if(this.beenGuessed){
			return this.character;
		}
		else{ 
			return "_";
		}
	};
	this.guess = function(character){
		if(character === this.character) {
			this.beenGuessed = true;
		}
	};
};

module.exports = Letter;

