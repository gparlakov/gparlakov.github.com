function createPerson(fName,lName,age){
	return{
		fName:fName,
		lName:lName,
		age:parseInt(age),
		toString: function(){
			return fName +" " + lName + ", " + age + " years"; 
		}
	}
} 