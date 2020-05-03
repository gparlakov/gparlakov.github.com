(function ($){
	$.fn.treeView = function() {
		//adds class to all ul so only they will be styled 
		this.find('ul').addClass('subListInTreeView');
		
		// adds class to all li items that have sub items so only they will show as folders
		var subUlElements = this.find('li > ul');		
		var nextSubUl = subUlElements.parent().addClass('hasSubItems').addClass('closed');		
		
		//hides all sub lists 
		this.find('ul > li > ul').fadeOut(1000);
		
		this.on('click', 'li', function (event) {
			event.stopPropagation();
		
			var subList = $(this).children('ul');
			if(subList.css('display') === 'none'){
				subList.show(1000);
				subList.parent().toggleClass('closed').toggleClass('opened');
			}
			else
			{
				subList.hide(1000);
				subList.parent().toggleClass('closed').toggleClass('opened');
			}
		});
	}
	
	
	$(document).ready(function (){
		$("#treeView").treeView();
		
		$("#makeOtherTreeVeiw").click(function () {
			$('#initiallyNotTreeView').treeView();
		});
		
	});
	
})(jQuery)