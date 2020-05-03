
//creates an object with functions to move circular and rectangular
function createMovableObject(centerLeft, centerTop, spd, radius) {
    if (!spd) {
        var spd = 0.005;
    }
    if(!radius){
        radius = 100;
    }

    var degree = 0;
    var positionTop = centerTop - radius;
    var positionLeft = centerLeft - radius;
    var delta = spd * 50; // movement speed in rectangular movement
    var movement = "right";
    var element = document.createElement("div");

    randomizeElement();

    function randomizeElement() {
        element.className = "movableDiv";
        element.style.color = generateRandomColor();
        element.style.backgroundColor = generateRandomColor();      
        element.style.borderColor = generateRandomColor();
    }

    function generateRandomColor() {
        var red = parseInt(Math.random() * 255);
        var green = parseInt(Math.random() * 255);
        var blue = parseInt(Math.random() * 255);
        var color = "rgb(" + red + "," + green + "," + blue + ")";

        return color;
    }

    //////## updating element on page ## /////
    function updateElement() {
        element.style.top = positionTop + "px";
        element.style.left = positionLeft + "px";
    }

    /////## Circular movement ##////
    var moveCircular = function () {
        updateDegree();
        positionTop = centerTop + Math.cos(degree) * 100;
        positionLeft = centerLeft + Math.sin(degree) * 100;
        updateElement();
    }
    
    function updateDegree() {
        if (degree >= Math.PI * 2 - spd) {
            degree = 0;
        }
        else {
            degree += spd;
        }
    }

    /////## Rectangular movement ##////
    function moveRectangular() {
        updatePosition();
        updateElement();
    }
    
    function updatePosition() {
        var leftWallPos = centerLeft - radius;
        var rightWallPos = centerLeft + radius;
        var topWallPos = centerTop - radius;
        var bottomWallPos = centerTop + radius;
        
        //upper left corner
        if(positionLeft === leftWallPos && positionTop === topWallPos){
            movement = "right";
        }
        //lower right corner
        else if(positionLeft === rightWallPos && positionTop === bottomWallPos){
            movement = "left";
        }
        //lower left corner
        else if(positionLeft === leftWallPos && positionTop === bottomWallPos){
            movement = "up";
        }
        //upper right corner
        else if(positionLeft === rightWallPos && positionTop === topWallPos){
            movement = "down";
        }
    
        move(movement);
    }
    
    function move(movement){  
        if(movement === "right") {
            positionLeft += delta;
        }
        else if(movement === "left") {
            positionLeft -= delta;
        }
        else if(movement === "up") {
            positionTop -= delta;
        }
        else if(movement === "down") {
            positionTop += delta;
        }
    }


    ////## revealed properties ##///
    return {
        element: element,
        moveCircular: moveCircular,
        moveRectangular: moveRectangular
    }
}