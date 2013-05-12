(function () {
    var images = {
        'image1': 'images/img1.jpg',
        'image2': 'images/img2.jpg',
        'image3': 'images/img3.jpg',
        'image4': 'images/img.jpg',
    }

    var CaroucelController = function () {
        //how fast the images move
        this.SPEED_OF_ROTATING = 4;        
        this.canvas;
        this.ctx;
        this.images = [];
        this.current = null;

    }

    CaroucelController.prototype = {
        initialize: function (canvasId, images, arrow_left, arrow_right) {
            this.canvas = document.getElementById(canvasId);
            this.ctx = this.canvas.getContext('2d');
            for (var i in images) {
                this.addImage(images[i]);
            }
            this.initializeEvents(arrow_left, arrow_right);
        },

        initializeEvents: function (leftArrowId, rightArrowId) {
            var that = this;
            var leftArrow = document.getElementById(leftArrowId);
            var rightArrow = document.getElementById(rightArrowId);

            leftArrow.addEventListener('click', function () {
                that.moveLeft();
            }, false);

            rightArrow.addEventListener('click', function () {
                that.moveRight();
            }, false);

            this.images[this.current].onload = function () {
                that.draw(that.images[that.current], 0, 0);
            }
        },

        addImage: function (imageSource) {
            newImage = new Image();
            newImage.src = imageSource;
            this.images.push(newImage);
            if (this.current === null) {
                this.current = 0;
            }
        },

        draw: function (image, x, y) {
            var width = this.canvas.width;
            var height = this.canvas.height;
            this.ctx.clearRect(x, y, width, height);
            this.ctx.drawImage(image, x, y, width, height);
        },

        drawNext: function (oldImage, newImage, direction) {

            var step = this.SPEED_OF_ROTATING;
            //if me move to the right we'll stop once we reach leftCorner - width 
            //( the '-' comes form the modifier)
            //also the step is modified so the images "move" to the other direction
            var directionModifier = 1;
            if (direction === 'right') {
                step = -step;
                directionModifier = -directionModifier;
            }

            var width = this.canvas.width;
            //            var height = this.canvas.height;
            var x = 0;
            var y = 0;
            var leftCorner = 0;
            var that = this;
            setInterval(function () {
                if (leftCorner < -width || leftCorner > width) {
                    clearInterval();
                    return;
                }

                that.draw(oldImage, leftCorner, 0);
                that.draw(newImage, leftCorner + width * directionModifier, 0);
                leftCorner -= step;

            }, 1000 / 60);
        },

        getNextLeft: function () {
            var nextLeft = -1;
            if (this.current > 0) {
                nextLeft = this.current - 1;
            }

            return nextLeft;
        },

        getNextRight: function () {
            var nextRight = -1;
            if (this.current < this.images.length - 1) {
                nextRight = this.current + 1;
            }

            return nextRight;
        },

        moveLeft: function () {
            var nextRight = this.getNextRight();
            if(nextRight > -1) {
                var oldImage = this.images[this.current];
                var newImage = this.images[nextRight];
                this.drawNext(oldImage, newImage, 'left');
                this.current = nextRight;
            }
        },

        moveRight: function () {
            var nextLeft = this.getNextLeft()
            if(nextLeft > -1) {
                var oldImage = this.images[this.current];
                var newImage = this.images[nextLeft];
                this.drawNext(oldImage, newImage, 'right');
                this.current = nextLeft;
            }
        }

    }

    var caroucelController = new CaroucelController();
    caroucelController.initialize('frame', images, 'left', 'right');
})()

