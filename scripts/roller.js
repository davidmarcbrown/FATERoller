$(document).ready(function () {

    var throwSize = 4;

    // returns score of roll as int
    function throwDice(numDice) {
        var totalScore = 0;

        for (var i = 0; i < numDice; i++) {
            $(".dieFrame:first").clone().appendTo(".diceThrow:last");

            // use these to style and populate the die
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

    function displayScore(totalScore) {
        $(".infoFrame:first").clone().appendTo(".diceThrow:last");
        $(".infoText:last").text(totalScore>0?"+"+totalScore:totalScore);
        $(".infoFrame:last").fadeIn();
    }

    $("#roll").click(function () {
        // new diceThrow div to put the dice in
        $(".diceThrow:first").clone().appendTo("#rolls");

        var totalScore = throwDice(throwSize);

        displayScore(totalScore);

        // displayResult(totalScore);
    });

    $("#clear").click(function () {
        $(".diceThrow:gt(0)").remove();
    });
});