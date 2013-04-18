
// posTop and posLeft is the center of new object
// speed from 0.03 to 0.1 
// moves in circles
function createMovableDiv(posTop,posLeft,speed){
	if (!speed) {
		var speed = 0.02;
	}	
	return { 	
		centerTop : posTop,
		centerLeft : posLeft,
		positionTop : posTop,
		positionLeft : posLeft,
		speed:speed,
		degree:0,			
		element:document.createElement("div")
	}
}

function updateElement(movableDiv) {
	movableDiv.element.style.top = movableDiv.positionTop;
	movableDiv.element.style.left = movableDiv.positionLeft;
}

function updateDegree(movableDiv) {
	if(movableDiv.degree > Math.PI * 2){
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