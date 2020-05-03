/// <reference path="../snake-game/scripts/class.js" />
/// <reference path="http://localhost:60165/snake-game-tests/QUnit/qunit-1.11.0.js" />
/// <reference path="../snake-game/scripts/snake.js" />

/// init: function (position, size, fcolor, scolor, speed, direction)
(function () {

    (function () {
        module("SnakePiece.init");
        test("should set correct values",
          function () {
              var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 0;
              var piece = new snakeGame.SnakePiece(position, size, speed, dir);
              equal(piece.position, position)
              equal(piece.size, 15);
              equal(piece.speed, speed);
              equal(piece.direction, dir);
          });

    }());

    (function () {
        module("SnakePiece.move");
        test("When direction is 0, decrease x",
          function () {
              var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 0;
              var piece = new snakeGame.SnakePiece(position, size, speed, dir);
              piece.move();
              position.x - speed;
              deepEqual(piece.position, position);
          });
        test("When direction is 1, decrease y",
          function () {
              var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 0;
              var piece = new snakeGame.SnakePiece(position, size, speed, dir);
              piece.move();
              position.y - speed;
              deepEqual(piece.position, position);
          });
        test("When  direction is 2, increase x",
          function () {
              var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 0;
              var piece = new snakeGame.SnakePiece(position, size, speed, dir);
              piece.move();
              position.x + speed;
              deepEqual(piece.position, position);
          });
        test("When  direction is 3, increase x",
          function () {
              var position = { x: 150, y: 150 }, size = 15, speed = 5, dir = 0;
              var piece = new snakeGame.SnakePiece(position, size, speed, dir);
              piece.move();
              position.y + speed;
              deepEqual(piece.position, position);
          });
    }());

    (function () {
        module("SnakePiece.changeDirection from moving LEFT")
        

        var snakePiece, position, size, speed, direction;

        //0 = left       
        QUnit.testStart(function () {
            position = { x: 200, y: 100 };
            size = 20;
            speed = 5;
            direction = 0;
            snakePiece = new snakeGame.SnakePiece(position, size, speed, direction);
        })

        test("change direction from LEFT to UP",
            function () {
                snakePiece.direction = 0;
                snakePiece.changeDirection(1);
                snakePiece.move();

                equal(snakePiece.direction, 1, "Changed to UP");
                equal(snakePiece.position.y, 100 - 5, "Change position in new direction successful");

            });

        test("change direction from LEFT to DOWN",
           function () {
               snakePiece.direction = 0;
               snakePiece.changeDirection(3);
               snakePiece.move();

               equal(snakePiece.direction, 3, "Changed to DOWN");
               equal(snakePiece.position.y, 100 + 5, "Change position in new direction successful");

           });

        test("change direction from LEFT to LEFT",
           function () {
               snakePiece.direction = 0;
               snakePiece.changeDirection(0);
               snakePiece.move();

               equal(snakePiece.direction, 0, "Remained LEFT");
               equal(snakePiece.position.x, 200 - 5, "Change position in old direction successful");

           });

        test("change direction from LEFT to RIGHT",
           function () {
               snakePiece.direction = 0;
               snakePiece.changeDirection(2);
               snakePiece.move();

               equal(snakePiece.direction, 0, "Remained LEFT");
               equal(snakePiece.position.x, 200 - 5, "Change position in old direction successful");

           });
    }());

    (function () {
        module("SnakePiece.changeDirection from moving Up")

        var snakePiece, position, size, speed, direction;

        //1 = up
        QUnit.testStart(function () {
            position = { x: 200, y: 100 };
            size = 20;
            speed = 5;
            direction = 1;
            snakePiece = new snakeGame.SnakePiece(position, size, speed, direction);
        });

        test("change direction from UP to UP",
            function () {
                snakePiece.changeDirection(1);
                snakePiece.move();

                equal(snakePiece.direction, 1, "Remained UP");
                equal(snakePiece.position.y, 100 - 5, "Change position in new direction successful");

            });

        test("change direction from UP to DOWN",
           function () {
               snakePiece.changeDirection(3);
               snakePiece.move();

               equal(snakePiece.direction, 1, "Remained UP");
               equal(snakePiece.position.y, 100 - 5, "Change position in old direction successful");

           });

        test("change direction from UP to LEFT",
           function () {
               snakePiece.changeDirection(0);
               snakePiece.move();

               equal(snakePiece.direction, 0, "Changed to LEFT");
               equal(snakePiece.position.x, 200 - 5, "Change position in new direction successful");

           });

        test("change direction from UP to RIGHT",
           function () {
               snakePiece.changeDirection(2);
               snakePiece.move();

               equal(snakePiece.direction, 2, "Changed to RIGHT");
               equal(snakePiece.position.x, 200 + 5, "Change position in new direction successful");

           });
    }());
    
    (function () {
        module("SnakePiece.changeDirection from moving RIGHT")

        var snakePiece, position, size, speed, direction;

        //1 = up
        QUnit.testStart(function () {
            position = { x: 200, y: 100 };
            size = 20;
            speed = 5;
            direction = 2;
            snakePiece = new snakeGame.SnakePiece(position, size, speed, direction);
        });

        test("change direction from RIGHT to UP",
            function () {
                snakePiece.changeDirection(1);
                snakePiece.move();

                equal(snakePiece.direction, 1, "Changed to UP");
                equal(snakePiece.position.y, 100 - 5, "Change position in new direction successful");

            });

        test("change direction from RIGHT to DOWN",
           function () {
               snakePiece.changeDirection(3);
               snakePiece.move();

               equal(snakePiece.direction, 3, "Chnaged to DOWN");
               equal(snakePiece.position.y, 100 + 5, "Change position in new direction successful");

           });

        test("change direction from RIGHT to LEFT",
           function () {
               snakePiece.changeDirection(0);
               snakePiece.move();

               equal(snakePiece.direction, 2, "Remained RIGHT");
               equal(snakePiece.position.x, 200 + 5, "Change position in old direction successful");

           });

        test("change direction from RIGHT to RIGHT",
           function () {
               snakePiece.changeDirection(2);
               snakePiece.move();

               equal(snakePiece.direction, 2, "Remained RIGHT");
               equal(snakePiece.position.x, 200 + 5, "Change position in old direction successful");

           });
    }());

    (function () {
        module("SnakePiece.changeDirection from moving DOWN")

        var snakePiece, position, size, speed, direction;

        //1 = up
        QUnit.testStart(function () {
            position = { x: 200, y: 100 };
            size = 20;
            speed = 5;
            direction = 3;
            snakePiece = new snakeGame.SnakePiece(position, size, speed, direction);
        });

        test("change direction from DOWN to UP",
            function () {
                snakePiece.changeDirection(1);
                snakePiece.move();

                equal(snakePiece.direction, 3, "Remained DOWN");
                equal(snakePiece.position.y, 100 + 5, "Change position in old direction successful");

            });

        test("change direction from DOWN to DOWN",
           function () {
               snakePiece.changeDirection(3);
               snakePiece.move();

               equal(snakePiece.direction, 3, "Remained DOWN");
               equal(snakePiece.position.y, 100 + 5, "Change position in old direction successful");

           });

        test("change direction from DOWN to LEFT",
           function () {
               snakePiece.changeDirection(0);
               snakePiece.move();

               equal(snakePiece.direction, 0, "Changed to LEFT");
               equal(snakePiece.position.x, 200 - 5, "Change position in new direction successful");

           });

        test("change direction from DOWN to RIGHT",
           function () {
               snakePiece.changeDirection(2);
               snakePiece.move();

               equal(snakePiece.direction, 2, "Changed to RIGHT");
               equal(snakePiece.position.x, 200 + 5, "Change position in new direction successful");

           });
    }());

}());