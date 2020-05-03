(function () {

    var listController = function () {
        this.listItems = [];
        //this.selected = [];
    }

    listController.prototype = {
        initialize: function (params) {
            if (localStorage.getItem('toDoListItems')) {
                this.listItems = JSON.parse(localStorage.getItem('toDoListItems'));
            }

            this.listWrapper = document.getElementById(params.listWrapper);
            this.addButton = document.getElementById(params.addButton);
            this.removeButton = document.getElementById(params.removeButton);
            this.showHideButton = document.getElementById(params.showHideButton);
            this.newItemInput = document.getElementById(params.newItemInput);

            this.updateList();

            this.initializeEvents();
        },

        initializeEvents: function () {
            that = this;

            //Add
            this.addButton.addEventListener('click', function (ev) {
                ev.preventDefault();
                that.addItem(that.newItemInput.value);
                that.updateStorage();
            }, false);

            //will enable all newly added notes to be 'selectable'
            //so when clicked and removeItem button
            this.listWrapper.addDelegateListener('click', 'li', function (ev) {
                ev.preventDefault();
                ev.target.classList.toggle('selected');
            });

            //Remove
            this.removeButton.addEventListener('click', function (ev) {
                ev.preventDefault();
                var nextElement = that.listWrapper.firstChild;
                while (nextElement) {
                    //when we remove it from list it has no more siblings so we save the sibling in a var
                    var nextSibling = nextElement.nextSibling;
                    if (nextElement.nodeName === 'LI' && nextElement.classList.contains('selected')) {
                        that.listWrapper.removeChild(nextElement);
                    }
                    nextElement = nextSibling;
                }
                //that.selected = [];//cleans up the list of selected                 
                that.updateStorage();

            }, false)

            this.showHideButton.addEventListener('click', function (ev) {
                ev.preventDefault();
                var list = that.listWrapper;
                if (list.style.display === 'none') {
                    list.style.display = '';
                }
                else {
                    list.style.display = 'none';
                }

            }, false);

        },

        addItem: function (newItem) {
            this.listWrapper.innerHTML += '<li class="item">' + newItem + '</li>';
        },

        updateStorage: function () {
            this.listItems = [];
            var child = this.listWrapper.firstChild;
            while (child) {
                if (child.nodeName === "LI") {
                    this.listItems.push(child.innerHTML);
                }
                child = child.nextSibling;
            }
            var stringified = JSON.stringify(this.listItems);
            localStorage.setItem('toDoListItems', stringified);
        },

        updateList: function () {
            for (var i = 0; i < this.listItems.length; i++) {
                this.addItem(this.listItems[i]);
            }
        }
    }

    var list = new listController();
    list.initialize({
        'listWrapper': 'list-wrapper',
        'addButton': 'inputNewItem',
        'removeButton': 'removeSelected',
        'showHideButton': 'showHide',
        'newItemInput': 'newItem'
    });


})()
