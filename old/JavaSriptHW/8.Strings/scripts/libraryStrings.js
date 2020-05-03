//from Objects
Array.prototype.remove = function(element){
	var i = 0;
	var len = this.length;
	for(i = len - 1; i >= 0; i--){
		if(this[i] === element){
			this.splice(i,1);
		}		
	}
} 


//from Strings
function countSubStr(string,stringToSearchFor){
	var subStr = stringToSearchFor;
	var counter = 0,nextIndex = 0;
	
	while(nextIndex > -1){
		nextIndex = string.indexOf(subStr,nextIndex) ;
		if (nextIndex >= 0){
			counter++;	
			nextIndex ++;
		}
	}	
	
	return counter;
}

function lowerArray(originalArrayOfStrings){
	var loweredArray = new Array();
	
	for(i = 0; i < originalArrayOfStrings.length; i++){
		loweredArray.push(originalArrayOfStrings[i].toLowerCase());
	}
	return loweredArray;
}


//for 11
function formatString(text,args){
	var i,formatedString;		
	var array = text.split(/[{}]/);
	
	for(i = 0;i < array.length - 1 ;i++){
		if(args[array[i]]){
			array[i] = args[array[i]];
		}
	}						
	formatedString = array.join('');			
	
	return formatedString;
}

function generatePerson(name,age){
	return{
		name:name,
		age:age
	}
}