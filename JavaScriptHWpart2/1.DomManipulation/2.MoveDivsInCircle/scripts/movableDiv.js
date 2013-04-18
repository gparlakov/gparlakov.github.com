
// posTop and posLeft is the center of rotation of new object
// speed from 0.03 to 0.1 
// moves in circles
// positions new element ouside of screen
function createMovableDiv(posTop,posLeft,spd){
	if (!spd) {
		var spd = 0.02;
	}	
	return { 	
		centerTop : posTop,
		centerLeft : posLeft,
		positionTop : -1000,
		positionLeft : -1000, 
		speed:spd,
		degree:0,			
		element:document.createElement("div")
	}
}

function updateElement(movableDiv) {
	movableDiv.element.style.top = movableDiv.positionTop + "px";
	movableDiv.element.style.left = movableDiv.positionLeft + "px";
}

function updateDegree(movableDiv) {
	if(movableDiv.degree >= Math.PI * 2 - movableDiv.speed){
		movableDiv.degree = 0;
	}
	else{			
		movableDiv.degree += movableDiv.speed; 
	}
}

function moveCircular(movableDiv) {	
	updateDegree(movableDiv);				
	movableDiv.positionTop = movableDiv.centerTop + Math.cos(movableDiv.degree) * 100;
	movableDiv.positionLeft = movableDiv.centerLeft + Math.sin(movableDiv.degree) * 100;	
	updateElement(movableDiv);
}