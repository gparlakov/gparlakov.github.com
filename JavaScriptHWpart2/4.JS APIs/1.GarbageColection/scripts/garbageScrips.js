/* File Created: май 7, 2013 */
var gameGarbageCollection = function () {
    var timeStart = new Date();
    var createRandomGarbage = function (number) {
        var newGarbage = document.createElement('img');
        newGarbage.src = "images/garbage.png";
        newGarbage.className = "garbage";
        newGarbage.id = "garbage" + number;
        newGarbage.style.position = "absolute";
        newGarbage.style.left = parseInt(300 + Math.random() * 600) + "px";
        newGarbage.style.top = parseInt(Math.random() * 900) + "px";
        var garbageContainer = document.getElementsByTagName('body');
        garbageContainer[0].appendChild(newGarbage);
    }

    var numberGarbages = parseInt(Math.random() * 10);

    for (var i = 0; i < numberGarbages; i++) {
        createRandomGarbage(i);
    }

    var toggleCan = function (ev) {
        if (!ev) {
            ev = window.event;
        }

        var elem = ev.currentTarget;
        elem.classList.toggle("closed");
        elem.classList.toggle("opened");
        stopEventPropagation(ev);

    };

    var stopEventPropagation = function (ev) {
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }
        if (ev.prevendDefault) {
            ev.preventDefault();
        }
        return false;
    };

    var drag = function (event) {
        if (!event) {
            event = window.event;
        }
        var garbageId = event.target.id;

        event.dataTransfer.setData("garbageId", garbageId);
    };

    var trashCan = document.querySelector('.trash-can');
    trashCan.ondragenter = toggleCan;
    trashCan.ondragover = stopEventPropagation;
    trashCan.ondrop = function (ev) {
        var garbageId = ev.dataTransfer.getData("garbageId");
        var garbage = document.getElementById(garbageId);
        garbage.outerHTML = "";
        toggleCan(ev);
        numberGarbages--;
        if (numberGarbages <= 0) {
            var time = new Date() - timeStart;
            alert("Game Won! In " + time/1000 + " seconds" );
        }
        return false;
    };

    var garbage = document.querySelectorAll('img');
    for (i = 0; i < garbage.length; i++) {
        garbage[i].ondragstart = drag;
    }
};
