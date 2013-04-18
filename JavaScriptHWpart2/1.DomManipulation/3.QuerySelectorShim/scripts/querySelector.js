function addQueries(){
	document.querySelectorAll = querySelectorAllShim(selectors);
	//document.prototype.querySelectorAll = querySelectorAllShim;
}

function querySelectorAllShim(selectors){
	var resultElement = null;
	
	if(args.indexOf(',') > 0){
		var multipleSelectorLines = selectors.split(',');
	}
	
	return "working" + selectors;
}