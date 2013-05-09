/* File Created: май 7, 2013 */

var gameGarbageCollection = function () {
    var COUNT_OF_HIGHSCORES = 5;

    var timeStart;
    var numberGarbages;
    var gameFieldElement = null;



    //Difficulty of game = 10 - 50 pieces of trash to cleanUp 
    var initialize = function (difficulty, gameFieldElement) {
        if (!gameFieldElement && gameFieldElement === null) {
            throw { 'Garbage Game Error': 'Failed to point where te game will take place. Need gamefield element.' };
        }
        else {
            setGameFieldElement(gameFieldElement);
        }
        clearGameField();

        if (!difficulty) {
            difficulty = 1;
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

        //starts game time
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
                clearGameField();
                scoreKeeping().displayScoreBoard(gameFieldElement, COUNT_OF_HIGHSCORES);

                if (gameFinished) {
                    gameFinished();
                }
            }
            return false;
        };

        var garbage = document.querySelectorAll('img');
        for (i = 0; i < garbage.length; i++) {
            garbage[i].ondragstart = drag;
        }
    };

    var setGameFieldElement = function (element) {
        gameFieldElement = element;
    }

    function clearGameField() {
        var element = gameFieldElement.firstChild;
        while (element) {
            element.outerHTML = "";
            element = element.nextSibling;
        }

    }

    return {
        initialize: initialize,
        startGame: startGame,
        setGameFieldElement: setGameFieldElement,
        getGameFieldElement: gameFieldElement
    }
};

var scoreKeeping = function () {
    function addPlayerScore(playerName, time) {
        var newScore = playerName + ":" + time;

        if (!localStorage.getItem('highScore')) {
            localStorage.setItem('highScore', newScore + '|');
            return;
        }

        var scores = localStorage.getItem('highScore');
        scores = pushNewScore(scores, newScore);
        localStorage.setItem('highScore', scores);
    }

    function pushNewScore(scores, newScore) {
        var scoresSplit = scores.match(/[\w]+:[\d\.]+/g);
        var newTime = parseScoreTime(newScore);
        var scorePushed = false;
        for (var i = 0; i < scoresSplit.length; i++) {
            var currTime = parseScoreTime(scoresSplit[i]);
            if (newTime < currTime) {
                scoresSplit.splice(i, 0, newScore);
                scorePushed = true;
                break;
            }
        }

        if (!scorePushed) {
            scoresSplit.push(newScore);
        }

        return scoresSplit.join('|');
    };

    //takes time from score
    function parseScoreTime(score) {
        var timeString = score.match(/:[\d\.\d]+\b/)[0];
        var time = parseFloat(timeString.substr(1));
        return time;
    }

    function displayScoreBoard(gameFieldElement, countToShow) {
        var scoreBoardDiv = createDivWithClass('scoreBoard');

        var scoresJSON = localStorage.getItem('highScore');

        var scores = scoresJSON.match(/[\w]+:[\d\.]+/g);
        if (countToShow && parseInt(countToShow) < scores.length) {
            var countOfScoresToShow = countToShow;
        }
        else {
            countOfScoresToShow = scores.length;
        }

        for (var i = 0; i < countOfScoresToShow; i++) {
            var nextScoreDiv = createDivWithClass('score');
            var currentScore = scores[i].split(':');
            nextScoreDiv.innerHTML = '<div style="clear:both"><p style="float:left;">' + currentScore[0] + '</p><p style="float:right">' + currentScore[1] + '</p></div>';
            scoreBoardDiv.appendChild(nextScoreDiv);
        }

        gameFieldElement.appendChild(scoreBoardDiv);
    }

    var createDivWithClass = function (name) {
        var div = document.createElement('div');
        div.className = name;
        return div;
    };

    return {
        displayScoreBoard: displayScoreBoard,
        addPlayerScore: addPlayerScore
    };
}
