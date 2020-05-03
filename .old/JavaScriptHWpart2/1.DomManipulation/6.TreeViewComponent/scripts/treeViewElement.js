//constructor of tree view element with functions 
//to addSubElement and show/hide sub elements list
//In CSS file I've declared classes for visibleChildren and invisibleChildren
function treeViewElement(){
	var component = document.createElement("li");
	component.name = "treeViewComponent";
	component.className = "invisibleChildren"
		
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
		if(!ul) {
			ul = document.createElement("ul");
			ul.name = "subElement";
		}
		
		ul.appendChild(element);
		ul.style.display = "none";		
		this.appendChild(ul);	
	}
	
	function showHide(event){
		if(this === event.target && this.className === "visibleChildren") {
			display(this,"none");			
			this.className = "invisibleChildren";
		}
		else {
			display(this,"");
			this.className = "visibleChildren";
		}
	}	
	
	component.addSubElement = addSubElement;
	component.addEventListener("click",showHide);
	return component;
}

