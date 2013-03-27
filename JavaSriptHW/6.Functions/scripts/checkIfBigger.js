function checkIfBigger(array,pos){
		
	var result = false;	
	
		if(pos > 0 && pos < array.length - 1){
			if(parseInt(array[pos]) > parseInt(array[pos - 1]) && parseInt(array[pos]) > parseInt(array[pos + 1])){
				result = true;
			}	
		}
		else{
			if(pos === 0 && parseInt(array[pos]) > parseInt(array[pos + 1])){
				result = true;
			}
			
			if(pos === array.length - 1 && parseInt(array[pos]) > parseInt(array[pos - 1])){
				result = true;
			}
		}
	return result;	
}