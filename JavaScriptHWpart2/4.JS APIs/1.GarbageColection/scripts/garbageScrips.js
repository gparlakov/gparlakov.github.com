/* File Created: май 7, 2013 */


(function () {
	var openCan = function (ev) {
    if (!ev) {
        ev = window.event;
    }
    toggleCan(ev.currentTarget);
    ev.stopPropagation();
	};

	var closeCan = function (ev) {
		toggleCan(ev.currentTarget);    
	}

	var toggleCan = function (elem) {
		elem.classList.toggle("closed");
		elem.classList.toggle("opened");
	};

	var recycleGarbage = function (ev) {
		if (!ev) {
			ev = window.event;
		}
		ev.currentTarget.style.display="none";
		ev.stopPropagation();
	}

    var trashCan = document.querySelector('.trash-can');
    trashCan.ondragenter = openCan;
	trashCan.ondragover = function() {return false;};
	trashCan.ondrop = closeCan;
    var garbage = document.querySelectorAll('img');
    for (var i = 0; i < garbage.length; i++) {
		garbage[i].ondrag = function(ev){ev.stopPropagation(); return false;};
        garbage[i].ondrop = recycleGarbage;
    }
} ());
