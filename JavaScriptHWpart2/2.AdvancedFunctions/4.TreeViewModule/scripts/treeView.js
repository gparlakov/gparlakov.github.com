var treeViewControls = function () {
    var parent;
    var ulNode = document.createElement('ul');

    var treeView = function (parentSelector) {
        parent = document.querySelector(parentSelector);
        parent.appendChild(ulNode);
        return new treeViewLiComponent();
    };


    var addNode = function () {
        var newNode = new treeViewLiComponent();
        var liNode = newNode.addNode();
        ulNode.appendChild(liNode);
        return liNode;
    };

    return {
        treeView: treeView,
        addNode: addNode
    }
};

var treeViewLiComponent = function () {
    var liNode = document.createElement('li');
   
    var addContent = function (content) {
        liNode.innerHTML = content;
    };
    liNode.content = addContent;

    var addNode = function () {
        return liNode;
    };

    return {        
        addNode: addNode
    }
};