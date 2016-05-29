$(document).ready(function () {
    var throwSize = 4;
    var throwCount = 0;

    function rollDie(diceThrow) {
        var roll = Math.floor(Math.random() * 3); // 0, 1, or 2
        var result = {};

        switch (roll) {
            case 0:
                result.text = "+";
                result.class = "success";
                result.score = 1;
                break;
            case 1:
                result.text = "-";
                result.class = "failure";
                result.score = -1;
                break;
            case 2:
                // text is non-breaking space
                result.text = String.fromCharCode(160);
                result.class = "neutral";
                result.score = 0;
                break;
        }

        diceThrow.append("<div></div>");
        var lastDie = $("#rolls .diceThrow div:last");
        lastDie.text(result.text);
        lastDie.addClass("die " + result.class);
        return result.score;
    }

    // returns score of roll as int
    function throwDice(numDice) {
        var totalScore = 0;

        for (var i = 0; i < numDice; i++) {
            $(".dieFrame:first").clone().appendTo(".diceThrow:last");

            // use these to style the die
            var text;
            var dieFrameClass;

            // -1, 0, or 1
            var rollValue = (Math.floor(Math.random() * 3)) - 1;

            switch (rollValue) {
                case -1:
                    text = "-";
                    dieFaceClass = "failure";
                    break;
                case 0:
                    text = String.fromCharCode(160);
                    dieFaceClass = "neutral";
                    break;
                case 1:
                    text = "+";
                    dieFaceClass = "success";
                    break;
            }

            $(".dieText:last").text(text);
            $(".dieFace:last").addClass(dieFaceClass);
            $(".dieFrame:last").fadeIn();

            totalScore += rollValue;
        }

        return totalScore;
    }

    $("#roll").click(function () {
        // new diceThrow div to put the dice in
        $(".diceThrow:first").clone().appendTo("#rolls");

        var totalScore = throwDice(4);

        // displayScore(totalScore);

        // displayResult(totalScore);
    });

    $("#clear").click(function () {
        $(".diceThrow:gt(0)").empty();
    });
});