(function () {
    var GameObject = function (param) {

        if (param) {
            this.centerX = param.x || 0;
            this.centerY = param.y || 0;
            this.width = param.width || 0;
            this.height = param.height || 0;
            this.deltaX = 0;
            this.deltaY = 0;
        }
        else {
            this.centerX;
            this.centerY;
            this.width;
            this.height;
            this.deltaX;
            this.deltaY;
        }
    }

    GameObject.prototype = {
        checkForCollisions: function (maxWidth, maxHeight) {
            var left = this.centerX - (this.width / 2);
            var right = this.centerX + (this.width / 2);
            var top = this.centerY - (this.height / 2);
            var bottom = this.centerY + (this.height / 2);

            if (right > maxWidth || left < 0) {
                this.deltaX = -this.deltaX;
            }

            if (top < 0 || bottom > maxHeight) {
                this.deltaY = -this.deltaY;
            }
        },

        update: function () {
            this.centerX += this.deltaX || 0;
            this.centerY += this.deltaY || 0;
        },

        setMovementDirection: function (deltaX, deltaY) {
            this.deltaX = deltaX;
            this.deltaY = deltaY;
        }
    }

    Ball = function (param) {
        GameObject.call(this, param);
        this.radius = param.radius;

        if (param.fillStyle) {
            this.fillStyle = param.fillStyle;
        }

        if (param.strokeStyle) {
            this.strokeStyle = param.strokeStyle;
        }
    }

    Ball.prototype = new GameObject();
    Ball.prototype.constructor = GameObject;

    Ball.prototype.drawObject = function (ctx) {
            ctx.save();
            ctx.fillStyle = this.fillStyle;
            ctx.strokeStyle = this.strokeStyle;
            ctx.beginPath();
            ctx.translate(this.centerX, this.centerY);
            ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }
    

})();

