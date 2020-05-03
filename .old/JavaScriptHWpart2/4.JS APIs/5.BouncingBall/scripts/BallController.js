/* File Created: май 11, 2013 */
(function () {

    var BallController = function () {
        this.gameObjects = [];
        this.context;
        this.width;
        this.height;
    };

    BallController.prototype = {
        initialize: function (param) {
            var canvas = document.getElementById(param.canvasElemId);
            this.context = canvas.getContext('2d');
            this.width = parseInt(canvas.width);
            this.height = parseInt(canvas.height);

        },

        addGameObject: function (gameObject) {
            this.gameObjects.push(gameObject);
        },

        bounceLoop: function () {
            var that = this;

            setInterval(function () {
                that.context.clearRect(0, 0, that.width, that.height); //clear canvas
                var i;
                var len = that.gameObjects.length;
                for (var i = 0; i < len; i++) {
                    that.gameObjects[i].checkForCollisions(that.width, that.height);
                    that.gameObjects[i].update();
                    that.gameObjects[i].drawObject(that.context);
                }
            }, 1000 / 60);
        }
    }


    var ballController = new BallController();
    ballController.initialize({ 'canvasElemId': 'BouncingBallField' });

    var ball = new Ball({ 'x': 10, 'y': 10, 'radius': 10, 'fillStyle': 'yellow' });
    ball.setMovementDirection(1, 3);
    ballController.addGameObject(ball);

    var ball2 = new Ball({ 'x': 55, 'y': 169, 'radius': 15, 'fillStyle': 'green' });
    ball2.setMovementDirection(-3, -0.5);
    ballController.addGameObject(ball2);


    ballController.bounceLoop();


})()