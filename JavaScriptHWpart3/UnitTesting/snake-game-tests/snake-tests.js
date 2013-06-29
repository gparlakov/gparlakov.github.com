/// <reference path="../snake-game/scripts/class.js" />
/// <reference path="http://localhost:60165/snake-game-tests/QUnit/qunit-1.11.0.js" />
/// <reference path="../snake-game/scripts/snake.js" />
/// init: function (position, size, fcolor, scolor, speed, direction)
; (function () {
    module("Snake.init");

    test("When snake is initialized, should set the correct values", function () {
        var position = {
            x: 150,
            y: 150
        };
        var speed = 15;
        var direction = 0;
        var snake = new snakeGame.Snake(position, speed, direction);

        equal(position, snake.position, "Position is set");
        equal(speed, snake.speed, "Speed is set");
        equal(direction, snake.direction, "Direction is set");
    });

    test("When snake is initialized, should contain 5 SnakePieces", function () {
        var position = {
            x: 150,
            y: 150
        };
        var speed = 15;
        var direction = 0;
        var snake = new snakeGame.Snake(position, speed, direction);

        ok(snake.pieces, "SnakePieces are created");
        equal(snake.pieces.length, 5, "Five SnakePieces are created");
        ok(snake.head, "HeadSnakePiece is created");
    });


    module("Snake.Consume");

    test("When object is Food, should grow", function () {
        var snake = new snakeGame.Snake({
            x: 150,
            y: 150
        }, 15, 0);
        var size = snake.size;
        snake.consume(new snakeGame.Food());
        var actual = snake.size;
        var expected = size + 1;
        equal(actual, expected);
    });

    test("When object is SnakePiece, should die", function () {
        var snake = new snakeGame.Snake({
            x: 150,
            y: 150
        }, 15, 0);

        var isDead = false;

        snake.addDieHandler(function () {
            isDead = true;
        });

        snake.consume(new snakeGame.SnakePiece());
        ok(isDead, "The snake is dead");
    });

    test("When object is Obstacle, should die", function () {
        var snake = new snakeGame.Snake({
            x: 150,
            y: 150
        }, 15, 0);

        var isDead = false;

        snake.addDieHandler(function () {
            isDead = true;
        });

        snake.consume(new snakeGame.Obstacle());
        ok(isDead, "The snake is dead");
    });

    //ADDED CODE FOR 2 task
    (function () {
        module("Add die handler");

        var snake;

        QUnit.testStart(
            function () {
                snake = new snakeGame.Snake({
                     x: 150,
                     y: 150
                 }, 15, 0);
            });

        test("Add die handler",
            

            function () {

                var objectForResult = {};
                var expected = "works";

                var handler = function () {
                    objectForResult["result"] = expected;
                };

                snake.addDieHandler(handler);

                snake.die();

                var actual = objectForResult.result;
                
                equal(expected, actual, "Die handler is called upon death of snake")

            });



    }());

    (function () {
        module("Grow functionality test");

        var snake;

        QUnit.testStart(
            function () {
                snake = new snakeGame.Snake({
                    x: 150,
                    y: 150
                }, 15, 0);
            });

        test("Grow ",
            function () {
                var expected = snake.pieces.length + 1;
                snake.grow();

                var actual = snake.size;
                equal(expected, actual, "Snake has grown with one object");                
            });

    }());

    //CODE FOR TASK 5
    (function () {
        module("Food.init test")
        var testFood = new snakeGame.Food({ x: 150, y: 150 }, 15);
        var foodFillColor = "#0000ff";
        var foodStrokeColor = "#00ff00";

        test("Food.init tests",
            function () {
                equal(150, testFood.position.x, "Postion x is OK");
                equal(150, testFood.position.y, "Postion y is OK");
                equal(15, testFood.size, "Size is OK");
                equal(foodFillColor, testFood.fcolor, "Fill color is set ok");
                equal(foodStrokeColor, testFood.scolor, "Stroke color is set ok");
            });

    }());

}());