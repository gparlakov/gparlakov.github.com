function addQueries(){
	
	document.querySelectorAll = querySelectorAllShim;
	document.querySelector = function(selectors) {
		var findAll = querySelectorAllShim(selectors);
		return findAll[0];
	}
}

function querySelectorAllShim(selectors){
	var resultElement = new Array();;
	var i;
	
	if(selectors.indexOf(',') > 0){
		var selectorsSplit = selectorsString.split(',');		
		for(i = 0; i < selectorsSplit.length; i++){
			resultElement.push(querySelectorAllShim(selectorsSplit[i]));
		}
	}
	else{
		if(selectors.indexOf(' ') > 0){			 
		}
	}
	
	return resultElement;
}

function getNodesTree(htmlObject){
	var nodesTree = new Object();	
	var nextNode = htmlObject.firstChild;	
	while(nextNode != null){		
		nodesTree[nextNode.nodeName] = getNodesTree(nextNode);
		nextNode = nextNode.nextSibling;
	}
	
	return nodesTree;
}

function clearTextNodes(array){
	var cleanedArray = new Array();
	for(var i = 0;i < array.length;i++){
		//if(typeof array[i] !== 'TextNode'){}
		console.log(typeof array[i]);
	}
}