/* File Created: май 7, 2013 */
(function () {
    var trashCan = document.querySelector('.trash-can');
    trashCan.ondragenter = openCan;
    var garbage = document.querySelectorAll('img');
    for (var i = 0; i < garbage.length; i++) {
        garbage[i].ondrop = recycleGarbage;
    }
} ());

var openCan = function (ev) {
    if (!ev) {
        ev = window.event;
    }
    toggleCan(ev.currentTarget);
    ev.stopPropagation();
};

var closeCan = function (can) {
    toggleCan(can);    
}

var toggleCan = function (elem) {
    elem.classList.toggle("closed");
    elem.classList.toggle("opened");
};

var recycleGarbage = function (ev) {
    if (!ev) ev = window.event;

    var trashCan = document.querySelector('.trash-can');
    toggleCan(trashCan);
    ev.currentTarget.style.display="none";
    ev.stopPropagation();

}
