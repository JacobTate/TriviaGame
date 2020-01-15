$(document).ready(function () {
    //hides everything not needed at this time
    //============================================
    //hides the timer
    $("#timer").hide();
    //hides the buttons
    $(".button1").hide();
    $(".button2").hide();
    $(".button3").hide();
    $(".button4").hide();
    $(".button5").hide();
    $(".button6").hide();
    $(".button7").hide();
    $(".button8").hide();
    //hides the correct answers
    $("#correct1").hide();
    $("#correct2").hide();
    $("#correct3").hide();
    $("#correct4").hide();
    $("#correct5").hide();
    $("#correct6").hide();
    $("#correct7").hide();
    $("#correct8").hide();
    //hides the incorrect answers
    $("#incorrect1").hide();
    $("#incorrect2").hide();
    $("#incorrect3").hide();
    $("#incorrect4").hide();
    $("#incorrect5").hide();
    $("#incorrect6").hide();
    $("#incorrect7").hide();
    $("#incorrect8").hide();
    //hides the time outs
    $("#timeOut1").hide();
    $("#timeOut2").hide();
    $("#timeOut3").hide();
    $("#timeOut4").hide();
    $("#timeOut5").hide();
    $("#timeOut6").hide();
    $("#timeOut7").hide();
    $("#timeOut8").hide();
    //hides the questions
    $(".title1").hide();
    $(".title2").hide();
    $(".title3").hide();
    $(".title4").hide();
    $(".title5").hide();
    $(".title6").hide();
    $(".title7").hide();
    $(".title8").hide();
    //hides the reset button
    $("#reset").hide();
    //hides the end of the game screen
    $("#endgame").hide();
    //variables
    //============================================
    var timer = 30;
    var count_down;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timeout = 1;
    //onclick functions
    //======================================================================
    //reset function
    $("#reset").on("click", function () {
        timer = 30;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        timeout = 1;
        button1();
        interval();
        $("#endgame").empty();
        $("#endgame").hide();
        $("#reset").hide();
    });

    //runs when you press the start button
    $("#start").on("click", function () {
        interval();
        button1();
        $("#timer").show();
        $("#start").hide();
    });

    //runs when you click one of the first buttons that pop up
    $(".button1").on("click", function () {
        //gets the button clicked value and stores it in a variable
        var btn_clicked = $(this).val();
        //if the button clicked value is 3 you win
        if (btn_clicked === "3") {
            correct++
            $("#correct1").show();

        }
        //else you lose
        else {
            incorrect++
            $("#incorrect1").show();
        }
        $(".title1").hide()
        clearInterval(count_down);
        $(".button1").hide();
        setTimeout(button2, 3 * 1000);
    });


    //runs when first buttons are hidden and the second buttons pop up
    $(".button2").on("click", function () {
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 you win
        if (btn_clicked === "1") {
            correct++
            $("#correct2").show();
        }
        //else you lose
        else {
            incorrect++
            $("#incorrect2").show();
        }
        $(".title2").hide()
        clearInterval(count_down);
        $(".button2").hide();
        setTimeout(button3, 3 * 1000);
    });

    //runs when second buttons are hidden and the third buttons pop up
    $(".button3").on("click", function () {
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 you win
        if (btn_clicked === "4") {
            correct++
            $("#correct3").show();
        }
        //else you lose
        else {
            incorrect++
            $("#incorrect3").show();
        }
        $(".title3").hide()
        clearInterval(count_down);
        $(".button3").hide();
        setTimeout(button4, 3 * 1000);
    });

    //runs when third buttons are hidden and the fourth buttons pop up
    $(".button4").on("click", function () {
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 you win
        if (btn_clicked === "2") {
            correct++
            $("#correct4").show();
        }
        //else you lose
        else {
            incorrect++
            $("#incorrect4").show();
        }
        $(".title4").hide()
        clearInterval(count_down);
        $(".button4").hide();
        setTimeout(button5, 3 * 1000);
    });

    //runs when fourth buttons are hidden and the fifth buttons pop up
    $(".button5").on("click", function () {
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 you win
        if (btn_clicked === "3") {
            correct++
            $("#correct5").show();
        }
        //else you lose
        else {
            incorrect++
            $("#incorrect5").show();
        }
        $(".title5").hide()
        clearInterval(count_down);
        $(".button5").hide();
        setTimeout(button6, 3 * 1000);
    });

    //runs when fifth buttons are hidden and the sixth buttons pop up
    $(".button6").on("click", function () {
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 you win
        if (btn_clicked === "2") {
            correct++
            $("#correct6").show();
        }
        //else you lose
        else {
            incorrect++
            $("#incorrect6").show();
        }
        $(".title6").hide()
        clearInterval(count_down);
        $(".button6").hide();
        setTimeout(button7, 3 * 1000);
    });

    //runs when sixth buttons are hidden and the seventh buttons pop up
    $(".button7").on("click", function () {
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 you win
        if (btn_clicked === "2") {
            correct++
            $("#correct7").show();
        }
        //else you lose
        else {
            incorrect++
            $("#incorrect7").show();
        }
        $(".title7").hide()
        $(".button7").hide();
        clearInterval(count_down);
        setTimeout(button8, 3 * 1000);
    });

    $(".button8").on("click", function () {
        var btn_clicked = $(this).val();
        if (btn_clicked === "3") {
            correct++
            $("#correct8").show();
        }
        //else you lose
        else {
            incorrect++
            $("#incorrect8").show();
        }
        $(".title8").hide()
        $(".button8").hide();
        clearInterval(count_down);
        setTimeout(endOfGame, 3 * 1000)
    });


    //other functions
    //====================================================
    //the interval
    function interval() {
        timer = 3;
        count_down = setInterval(time, 1000);
    }
    //the timer function
    function time() {
        timer--
        $("#timer").text("remaining time:" + timer);
        if (timer === 0) {
            clearInterval(count_down)
            unanswered++
            if (timeout === 1) {
                $(".button1").hide();
                $(".title1").hide();
                $("#timeOut1").show();
                //setTimeout(clearTimeOut, 3 * 1000);
                setTimeout(button2, 3 * 1000);
            } else if (timeout === 2) {
                $(".button2").hide();
                $(".title2").hide();
                $("#timeOut2").show();
                setTimeout(button3, 3 * 1000);
            } else if (timeout === 3) {
                $(".button3").hide();
                $(".title3").hide();
                $("#timeOut3").show();
                setTimeout(button4, 3 * 1000);
            } else if (timeout === 4) {
                $(".button4").hide();
                $(".title4").hide();
                $("#timeOut4").show();
                setTimeout(button5, 3 * 1000);
            } else if (timeout === 5) {
                $(".button5").hide();
                $(".title5").hide();
                $("#timeOut5").show();
                setTimeout(button6, 3 * 1000);
            } else if (timeout === 6) {
                $(".button6").hide();
                $(".title6").hide();
                $("#timeOut6").show();
                setTimeout(button7, 3 * 1000);
            } else if (timeout === 7) {
                $(".button7").hide();
                $(".title7").hide();
                $("#timeOut7").show();
                setTimeout(button8, 3 * 1000);
            } else if (timeout === 8) {
                $(".button8").hide();
                $(".title8").hide();
                $("#timeOut8").show();
                setTimeout(endOfGame, 3 * 1000);
            }
        }

    }
    //shows the first buttons
    function button1() {
        $(".button1").show();
        $(".title1").show();
    }
    //shows the second buttons
    function button2() {
        timeout++
        $(".title2").show();
        $(".button2").show();
        $("#correct1").hide();
        $("#incorrect1").hide();
        $("#timeOut1").hide();
        interval();
    }

    //shows the third buttons
    function button3() {
        timeout++
        $(".title3").show();
        $(".button3").show();
        $("#correct2").hide();
        $("#incorrect2").hide();
        $("#timeOut2").hide();
        interval();
    }

    //shows the fourth buttons
    function button4() {
        timeout++
        $(".title4").show();
        $(".button4").show();
        $("#correct3").hide();
        $("#incorrect3").hide();
        $("#timeOut3").hide();
        interval();
    }

    //shows the fifth buttons
    function button5() {
        timeout++
        $(".title5").show();
        $(".button5").show();
        $("#correct4").hide();
        $("#incorrect4").hide();
        $("#timeOut4").hide();
        interval();
    }

    //shows the sixth buttons
    function button6() {
        timeout++
        $(".title6").show();
        $(".button6").show();
        $("#correct5").hide();
        $("#incorrect5").hide();
        $("#timeOut5").hide();
        interval();
    }

    //shows the seventh buttons
    function button7() {
        timeout++
        $(".title7").show();
        $(".button7").show();
        $("#correct6").hide();
        $("#incorrect6").hide();
        $("#timeOut6").hide();
        interval();
    }

    //shows the eighth buttons
    function button8() {
        timeout++
        $(".title8").show();
        $(".button8").show();
        $("#correct7").hide();
        $("#incorrect7").hide();
        $("#timeOut7").hide();
        interval();
    }

    function endOfGame() {
        $("#endgame").show();
        $("#correct8").hide();
        $("#incorrect8").hide();
        $("#timeOut8").hide();
        $("#endgame").append("correct:" + correct + "<br>" + "incorrect:" + incorrect + "<br>" + "unanswered:" + unanswered)
        $("#reset").show();
    }





});