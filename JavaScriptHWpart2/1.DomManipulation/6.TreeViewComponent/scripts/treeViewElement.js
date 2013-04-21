function treeViewElement(){
	var component = document.createElement("li");
	component.name = "treeViewComponent";
	//component.status = "hiddenChildren";
	component.className = "hiddenChildren"
		
	function display(element,displayStyle) {
		if(element.firstChild) {
			var childNode = element.firstChild;
			while(childNode){
				if(childNode.name === "subElement"){
					childNode.style.display = displayStyle;
				}
				childNode = childNode.nextSibling;
			}
		}		
	}
	
	function addSubElement(element){	
		var ulList = this.getElementsByTagName("ul");
		var ul = ulList[0];
		if(!ul){
			ul = document.createElement("ul");
			ul.name = "subElement";
		}
		ul.appendChild(element);		
		this.appendChild(ul);
		ul.style.display = "none";
		//ul.style.position = "absolute";
		
	}
	
	function showHide(event){
		if(this === event.target && this.className === "visibleChildren") {
			display(this,"none");
			//this.status = "hiddenChildren";
			this.className = "hiddenChildren";
		}
		else {
			display(this,"");
			//this.status = "visibleChildren";
			this.className = "visibleChildren";
		}
	}	
	
	
	//component.onmouseclick = showHide;
	//component.onclick = showHide;
	//component.onmouseover = showHide;
	//component.onmouseout = hide;
	//component.updateElements = updateElements;
	component.addSubElement = addSubElement;
	component.addEventListener("click",showHide);
	return component;
}

