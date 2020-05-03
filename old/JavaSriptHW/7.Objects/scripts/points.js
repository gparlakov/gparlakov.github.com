function Point(x, y) {
	return {
		x: parseInt(x),
		y: parseInt(y),		
		toString: function () {
			return "(" + x + "," + y + ")";
		}
	}	
}

function Line(p1, p2) {
	return{
		p1:p1,
		p2:p2,
		
		toString: function () {
			return "[" + p1.toString() + "], [" + p2.toString() + "]"
		}
	}
}

function calculateDistance2D (p1, p2) {
	// check if p1 and p2 are objects of type Point
	if(typeof p1 === typeof new Point (1, 1) && typeof p2  === typeof new Point (1, 1)){
		var distance = Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
		return parseFloat(distance).toFixed(2); //format the output so it shows only 2 digits after decimal point
	}
	else{
		return "NaN";
	}
}

function isTriangle(line1, line2, line3) {
	var line = new Line(new Point(1, 1),new Point(1, 1)); // use this line to check if arguments are objects Line
	var isTri = false;
	
	//check objects
	if(typeof line1 === typeof line && typeof line2 === typeof line && typeof line3 === typeof line ){ 
		//first line is AB, second CD third, EF 
		// we check if A == C || A == E 
		
		var A = line1.p1;
		var B = line1.p2;		
		
		var C = line2.p1;
		var D = line2.p2;		
		
		var E = line3.p1;
		var F = line3.p2;
		

		//logic to check if lines start and end at same points
		if(isEqual(A,C)){
			if(isEqual(B,E) && isEqual(D,F)){
				isTri = true;
			}
			else if(isEqual(B,F) && isEqual(D,E)){
				isTri = true;
			}			
		}
		else if(isEqual(A,D)){
			if(isEqual(B,E) && isEqual(F,C)){
				isTri = true;
			}
			else if(isEqual(B,F) && isEqual(C,E)){
				isTri = true;
			}			
		}
		else if(isEqual(A,E)){
			if(isEqual(B,C) && isEqual(D,F)){
				isTri = true;
			}
			else if(isEqual(B,D) && isEqual(C,F)){
				isTri = true;
			}			
		}
		else if(isEqual(A,F)){
			if(isEqual(B,D) && isEqual(C,E)){
				isTri = true;
			}
			else if(isEqual(B,C) && isEqual(E,D)){
				isTri = true;
			}			
		}
	}
	
	return isTri;
}

function isEqual (p1,p2){
	if(p1.x === p2.x && p1.y === p2.y){
		return true;		
	}
	else{
		return false;
	}
}

