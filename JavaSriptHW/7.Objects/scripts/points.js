function Point(x,y){
	return{
		x: parseInt(x),
		y: parseInt(y),
		
		toString: function(){
			return "(" + x + "," + y + ")";
		}
	}	
}

function Line(p1,p2){
	return{
		p1:p1,
		p2:p2,
		
		toString: function(){
			return "[" + p1.toString() + "], [" + p2.toString() + "]"
		}
	}
}

function calculateDistance2D(p1, p2){
	// check if p1 and p2 are objects of type Point
	if(typeof p1 === typeof new Point(1,1) && typeof p2  === typeof new Point(1,1)){
		var distance = Math.sqrt(Math.pow((p1.x - p2.x),2) + Math.pow((p1.y - p2.y),2));
		return parseFloat(distance).toFixed(2); //format the output so it shows only 2 digits after decimal point
	}
	else{
		return "NaN";
	}
}

function isTriangle(line1,line2,line3){
	var line = new Line(new Point(1,1),new Point(1,1)); // use this line to check if arguments are objects Line
	var isTri = false;
	
	//check objects
	if(typeof line1 === typeof line && typeof line2 === typeof line && typeof line3 === typeof line ){ 
			var l1p1 = line1.p1;
			var l1p2 = line1.p2;
			orderPoints(l1p1, l1p2);
			
			var l2p1 = line2.p1;
			var l2p2 = line2.p2;
			orderPoints(l2p1, l2p2);
			
			var l3p1 = line3.p1;
			var l3p2 = line3.p2;
			orderPoints(l3p1, l3p2);

			if(true){
				//todo add logic to check if lines start and end at same points
			}
	}
	
	return isTri;
}

//reverse places of points if x1 > x2 (so that when checking in isTriangle I always know which point is with lesser x
function orderPoints(p1,p2){
	if(p1.x > p2.x)
	var pTemp = new Point(p1.x, p1.y);
	p1.x = p2.x;
	p1.y = p2.y;
	
	p2.x = pTemp.x;
	p2.y = pTemp.y;
	
}