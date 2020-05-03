Array.prototype.remove = function(element){
	var i = 0;
	var len = this.length;
	for(i = len - 1; i >= 0; i--){
		if(this[i] === element){
			this.splice(i,1);
		}		
	}

} 