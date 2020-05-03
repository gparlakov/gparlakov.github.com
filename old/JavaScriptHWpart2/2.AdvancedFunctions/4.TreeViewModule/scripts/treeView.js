var treeViewModule = function () {
    var parent;
    var ulNode = document.createElement('ul');    

    //appends treeView chain of elements (ul) under element defind by parentSelector
    var treeView = function (parentSelector) {
        parent = document.querySelector(parentSelector);
        parent.appendChild(ulNode);
        parent.addNode = addNodeInUl;
        parent.onmouseover = addOnClickToggleVisibility;
        return parent;
    };

    //I've got two different functions for adding element under li and under ul:   

    //adds node under ul and returns the new li  
    var addNodeInUl = function () {
        var liNode = document.createElement('li');
        ulNode.appendChild(liNode);
        liNode.content = addContent;
        liNode.addNode = addNodeInLi;
        return liNode;
    };

    //adds node under li (ul > li) and returns the new li
    var addNodeInLi = function () {
        this.className = "ul-opened";
        var ulNode = getOrCreateUlChild(this);
        var newLiNode = document.createElement('li');
        ulNode.appendChild(newLiNode);
        newLiNode.content = addContent;
        newLiNode.addNode = addNodeInLi;
        newLiNode.onclick = toggleChildrenVisibility;
        return newLiNode;
    }

    var addContent = function (content) {
        this.innerHTML = "<a href = '#' >" + content + "</a>";
    };
        
    function getOrCreateUlChild(parentElem) {
        var result = getChildElemByNodeName(parentElem, 'UL');
        if (!result) {
            result = document.createElement('ul');
            parentElem.appendChild(result);
        }

        return result;
    }

    var getChildElemByNodeName = function (parentElem, childNodeName) {
        var ulChild = null;
        var child = parentElem.firstChild;
        while (child) {
            if (child.nodeName === childNodeName) {
                ulChild = child;
                break;
            }
            child = child.nextSibling;
        }

        return ulChild;
    }

    var toggleChildrenVisibility = function (ev) {
        //for IE support
        if (!ev) {
            ev = window.event;
        }
        var liElem = ev.currentTarget;
        var ulChild = getChildElemByNodeName(liElem, 'UL');

        if (ulChild) {
            if (ulChild.style.display === "") {
                ulChild.style.display = "none";
                liElem.className = "ul-closed";
            }
            else {
                ulChild.style.display = "";
                liElem.className = "ul-opened";
            }
        }

        //to stop event chain
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }
        else if (ev.preventDefault) {
            ev.preventDefault();
        }
        //IE 8 stops propagating/repeating the event up the event chain/ with this
        else if (ev.cancelBubble === false) {
            ev.cancelBubble = true;
        }
        return false;
    }

    //this is used only once to add toggle on the first row of 
    //li-elements because they dont get it otherwise
    var addOnClickToggleVisibility = function () {
        var allUlLiChildren = this.querySelectorAll('ul > li');
        var i;
        for (i = 0; i < allUlLiChildren.length; i++) {
            var liElem = allUlLiChildren[i]
            if (liElem && liElem.onclick === null) {
                liElem.onclick = toggleChildrenVisibility;
            }
        }

        //prevents multiple repetitions
        this.onmouseover = null;
    }

    return {
        treeView: treeView        
    }
};