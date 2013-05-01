var consoleP = (function () {
    var console = document.getElementById("console");

    var writeLine = function () {
        var string = formatString(arguments);
        writeParagraph(string);
    };

    var writeError = function () {
        var string = formatString(arguments);
        writeParagraph(string, "error");
    };


    var writeWarning = function () {
        var string = formatString(arguments);
        writeParagraph(string, "warning");
    };

    var writeGreen = function () {
        var string = formatString(arguments);
        writeParagraph(string, "green");
    };

    var formatString = function () {
        var string = arguments[0][0];
        if (arguments[0].length > 1) {
            var splitString = string.split(/[{}]/g);
            for (var i = 0; i < splitString.length; i++) {
                var number = parseInt(splitString[i], 10);
                if (!isNaN(number)) {
                    splitString[i] = arguments[0][number + 1].toString();
                }
            }

            string = splitString.join('');
        }

        return string;
    };

    function writeParagraph(string, type){
        var coloredString = '<p';
        
        if(!type || type === "simple"){
            coloredString += '>';
        }
        else if(type === "error"){
            coloredString += ' style="color:red">'; 
        }
        else if(type === "warning"){
            coloredString += ' style="color:orange">'; 
        }
        else if (type === "green") {
            coloredString += ' style="color:green">';
        }

        coloredString += string + '</p>';

        console.innerHTML += coloredString;
    }

   //visible from outside
    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning,
        writeGreen: writeGreen
    };

}());