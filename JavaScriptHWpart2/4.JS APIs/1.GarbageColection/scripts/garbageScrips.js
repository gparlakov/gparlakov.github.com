/* File Created: май 7, 2013 */
var gameGarbageCollection = function () {
    var timeStart;
    var numberGarbages;
    var gameFieldElement = document.getElementsByTagName('body')[0];

    //Difficulty of game = 10 - 50 pieces of trash to cleanUp 
    var initialize = function (difficulty, gameFieldElement) {
        if (!difficulty) {
            difficulty = 1;
        }

        if (!gameFieldElement) {
            gameFieldElement = document.getElementsByTagName('body')[0];
        }

        numberGarbages = parseInt(difficulty * 10);

        var trashCan = document.createElement('div');
        trashCan.classList.add("trash-can");
        trashCan.classList.add("closed");
        gameFieldElement.appendChild(trashCan);

        var createRandomGarbage = function (number) {
            var newGarbage = document.createElement('img');
            newGarbage.src = "images/garbage.png";
            newGarbage.className = "garbage";
            newGarbage.id = "garbage" + number;
            newGarbage.style.left = parseInt(300 + Math.random() * 600) + "px";
            newGarbage.style.top = parseInt(Math.random() * 700) + "px";

            gameFieldElement.appendChild(newGarbage);
        };

        for (var i = 0; i < numberGarbages; i++) {
            createRandomGarbage(i);
        }

        //starts gamer timer
        timeStart = new Date();
    };

    var toggleCan = function (ev) {
        if (!ev) {
            ev = window.event;
        }

        var elem = ev.currentTarget;
        elem.classList.toggle("closed");
        elem.classList.toggle("opened");
        stopEventPropagation(ev);
    };

    var stopEventPropagation = function (ev) {
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }
        if (ev.prevendDefault) {
            ev.preventDefault();
        }
        return false;
    };

    var drag = function (event) {
        if (!event) {
            event = window.event;
        }
        var garbageId = event.target.id;

        event.dataTransfer.setData("garbageId", garbageId);
    };

    var startGame = function () {
        var trashCan = document.querySelector('.trash-can');
        trashCan.ondragenter = toggleCan;
        trashCan.ondragover = stopEventPropagation; //to allow drop
        trashCan.ondrop = function (ev) {
            var garbageId = ev.dataTransfer.getData("garbageId");
            var garbage = document.getElementById(garbageId);
            garbage.outerHTML = "";
            toggleCan(ev);
            numberGarbages--;
            if (numberGarbages <= 0) {
                var time = new Date() - timeStart;
                alert("Game Won! In " + time / 1000 + " seconds");
                var playerName = prompt("Nickname for score board: ");
                scoreKeeping().addPlayerScore(playerName, time / 1000);
            }
            return false;
        };

        var garbage = document.querySelectorAll('img');
        for (i = 0; i < garbage.length; i++) {
            garbage[i].ondragstart = drag;
        }
    };

    return {
        initialize: initialize,
        startGame: startGame
    }
};

var scoreKeeping = function () {
    function copyObjectProperties (obj) {
        var result = {};
        for (var i in obj) {
            result[i] = obj[i];
        }

        return result;
    };

    function addPlayerScore (playerName, time) {
        if (!localStorage.garbageGame) {
            localStorage.garbageGame = {};
        };

        localStorage.garbageGame[playerName] = parseFloat(time);
    }

    function displayScoreBoard () {
        if (!localStorage.garbageGame) {
            alert("No Scores");
            return;
        }

        var scoreBoardCopy = copyObjectProperties(localStorage.garbageGame);
        var length = scoreBoardCopy.length;
        var scores = [];

        for (var i = 0; i < length; i++) {
            scores.push(pullBestScore(scoreBoardCopy));
        }


    };

    function pullBestScore (scoreBoard) {
        var bestScore = null;
        var bestKey = null;
        for (var i in scoreBoard) {
            if (bestScore === null) {
                bestScore = parseFloat(scoreBoard[i]);
                bestKey = i;
            }
            else {
                if (parseFloat(scoreBoard[i]) < bestScore) {
                    bestScore = parseFloat(scoreBoard[i]);
                    bestKey = i;
                }
            }
        }

        var result = i + "   :   " + Math.round(bestScore, 3);
        scoreBoard[bestKey] = null;
        return result;
    }

    return {
        copyObject: copyObjectProperties,
        pullBestScore: pullBestScore,
        displayScoreBoard: displayScoreBoard,
        addPlayerScore: addPlayerScore
    };
}
