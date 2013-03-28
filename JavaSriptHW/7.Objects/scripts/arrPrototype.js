Array.prototype.remove = function(element){
	var i = 0;
	for(i = 0; i < this.length;i++){
		if(this[i] === element){
			this.splice(i,1);
		}
		
		//if the last two(or more) elements need to be removed the last one stays
		//because the length of array shortens every time I use split
		if(this[this.lenght - 1] === element){
		    this.splice[this.lenght - 1,1];
		}
	}

} 