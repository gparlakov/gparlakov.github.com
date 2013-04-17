function createMovableDiv(posTop,posLeft){
	return{	
		centerTop : posTop,
		centerLeft : posLeft,
		positionTop : posTop,
		positionLeft : posLeft,
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
		movableDiv.degree += 0.1; 
	}
}

function moveCircular(movableDiv) {
	updateDegree(movableDiv);				
	movableDiv.positionTop = movableDiv.centerTop + Math.cos(movableDiv.degree) * 100;
	movableDiv.positionLeft = movableDiv.centerLeft + Math.sin(movableDiv.degree) * 100;
	updateElement(movableDiv);	
	console.log("move");
}