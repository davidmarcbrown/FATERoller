$(document).ready(function () {
    var throwSize = 4;

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


    $("#roll").click(function () {
        $("#rolls").append("<div></div>");
        var diceThrow = $("#rolls div:last"); // element with a handful of thrown dice
        diceThrow.addClass("diceThrow");


        var totalScore = 0;
        for (var i = 0; i < 4; i++) {
            totalScore += rollDie(diceThrow);
        }
        diceThrow.append("<div>" + totalScore + "</div>");
        
    });

    $("#clear").click(function () {
        $("#rolls").empty();
    });

});