var nodesTree = getNodesTree(this.document);
function addQueries(){
	
	document.querySelectorAll = querySelectorAllShim;
	document.querySelector = function(selectors) {
		var findAll = querySelectorAllShim(selectors);
		return findAll[0];
	}
}

function querySelectorAllShim(selectors){
	var resultElement = new Array();
	var i;
	
	if(selectors.indexOf(',') > 0){
		var selectorsSplit = selectorsString.split(',');		
		for(i = 0; i < selectorsSplit.length; i++){
			resultElement.push(querySelectorAllShim(selectorsSplit[i]));
		}
	}
	else{
		//TODO multiple words in selector String
		//if(selectors.indexOf(' ') > 0){			 
		//}
		var selectorStr;
		switch(selectors[0]) {
			case "#":{
				selectorStr = selectors.substr(1).toUpperCase();
				resultElement = searchTree(nodesTree,selectorStr,"id");
				break;
			}
			case ".":{
				selectorStr = selectors.substr(1).toUpperCase();
				resultElement = searchTree(nodesTree,selectorStr,"class");
				break;
			}
			default:{
				selectorStr = selectors.toUpperCase();
				resultElement = searchTree(nodesTree,selectorStr);
				break;			
			}
		}		
	}
	
	return resultElement;
}

function getNodesTree(htmlObject){
	var nodesTree = new Object();	
	var nextNode = htmlObject.firstChild;	
	while(nextNode != null){
		
		nodesTree[nextNode.nodeName] = nextNode;
		nodesTree.CHILDREN = getNodesTree(nextNode);
		nextNode = nextNode.nextSibling;
	}
	
	return nodesTree;
}

function searchTree(tree,selector,typeOfSelector){
	var resultElements = new Array();
	
	if(!typeOfSelector){
		typeOfSelector = "simple";
	}
	
	for(var i in tree){
		switch(typeOfSelector){
			case "simple":{
				if(i === selector){
					resultElements.push(tree[i]);
				}
				break;
			}
			case "class":{
				if(tree[i].className === selector){
					resultElements.push(tree[i]);
				}
				break;
			}
			case "id":{
				if(tree[i].id === selector){
					resultElements.push(tree[i]);
				}
				break;
			}
		
		}
		
		if(i === "CHILDREN"){
			var resultsInChildren = searchTree(tree[i].CHILDREN,selector,typeOfSelector);
			if(resultsInChildren){
				resultElements.push(resultsInChildren);
			}
		}
	}
		
	return resultElements;	
}
