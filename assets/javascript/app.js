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
        //sets the time back to 30
        timer = 30;
        //resets the answers
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        //resets the variable that tells the code what question is next when the time runs out
        timeout = 1;
        //calls the button1 function
        button1();
        //starts the timer
        interval();
        //emptys the end of the game div 
        $("#endgame").empty();
        //hides the end of game div
        $("#endgame").hide();
        //hides the reset button
        $("#reset").hide();
    });

    //runs when you press the start button
    $("#start").on("click", function () {
        //starts the timer
        interval();
        //calls the button1 function
        button1();
        //shows the timer
        $("#timer").show();
        //hides the start button
        $("#start").hide();
    });

    //the buttons for the first set of questions
    $(".button1").on("click", function () {
        //gets the value of the button clicked and stores it in a variable
        var btn_clicked = $(this).val();
        //if the button clicked value is 3 show the correct1 sereen and add to the correct guesses
        if (btn_clicked === "3") {
            correct++
            $("#correct1").show();

        }
        //show the incorrect screen and add to the incorrect1 guesses
        else {
            incorrect++
            $("#incorrect1").show();
        }
        //hides the question
        $(".title1").hide()
        //stops the timer
        clearInterval(count_down);
        //hides the buttons
        $(".button1").hide();
        //after 3 seconds call the button2 function
        setTimeout(button2, 3 * 1000);
    });


    //the buttons for the second set of questions
    $(".button2").on("click", function () {
        //gets the value of the button clicked and stores it in a variable
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 show the correct2 screen and add the the correct guesses
        if (btn_clicked === "1") {
            correct++
            $("#correct2").show();
        }
        //show the incorrect2 screen and add to the incorrect gusses
        else {
            incorrect++
            $("#incorrect2").show();
        }
        //hides the questions
        $(".title2").hide()
        //stops the timer 
        clearInterval(count_down);
        //hides the buttons
        $(".button2").hide();
        //calls the button3 function (line:343)
        setTimeout(button3, 3 * 1000);
    });

    //the buttons for the third set of questions
    $(".button3").on("click", function () {
          //gets the value of the button clicked and stores it in a variable
        var btn_clicked = $(this).val();
        //if the button clicked value is 4 show the correct3 screen and add the the correct guesses
        if (btn_clicked === "4") {
            correct++
            $("#correct3").show();
        }
        //show the incorrect3 screen and add to the incorrect gusses
        else {
            incorrect++
            $("#incorrect3").show();
        }
        //hides the questions
        $(".title3").hide()
        //stops the timer 
        clearInterval(count_down);
         //hides the buttons
        $(".button3").hide();
         //calls the button3 function 
        setTimeout(button4, 3 * 1000);
    });

    //the buttons for the fourth set of questions
    $(".button4").on("click", function () {
        //gets the value of the button clicked and stores it in a variable
        var btn_clicked = $(this).val();
         //if the button clicked value is 2 show the correct4 screen and add the the correct guesses
        if (btn_clicked === "2") {
            correct++
            $("#correct4").show();
        }
         //show the incorrect4 screen and add to the incorrect gusses
        else {
            incorrect++
            $("#incorrect4").show();
        }
         //hides the questions
        $(".title4").hide()
          //stops the timer 
        clearInterval(count_down);
        //hides the buttons
        $(".button4").hide();
        //calls the button3 function 
        setTimeout(button5, 3 * 1000);
    });

    //the buttons for the fifth set of questions
    $(".button5").on("click", function () {
        //gets the value of the button clicked and stores it in a variable
        var btn_clicked = $(this).val();
         //if the button clicked value is 3 show the correct5 screen and add the the correct guesses
        if (btn_clicked === "3") {
            correct++
            $("#correct5").show();
        }
       //show the incorrect5 screen and add to the incorrect gusses
        else {
            incorrect++
            $("#incorrect5").show();
        }
        //hides the question
        $(".title5").hide()
        //stops the timer
        clearInterval(count_down);
        //hides the buttons
        $(".button5").hide();
        //calls the button6 function after 3 seconds
        setTimeout(button6, 3 * 1000);
    });

    //the sixth set of questions
    $(".button6").on("click", function () {
        //gets the value of the button clicked and stores it in a variable
        var btn_clicked = $(this).val();
        //if the value of the button clicked is 2 show the correct 6 screen and add to the correct guesses
        if (btn_clicked === "2") {
            correct++
            $("#correct6").show();
        }
        //show the incorrect6 screen and add to the incorrect guesses
        else {
            incorrect++
            $("#incorrect6").show();
        }
        //hides the question
        $(".title6").hide()
        //stops the timer
        clearInterval(count_down);
        //hides the buttons
        $(".button6").hide();
        //calls the button7 function after 3 seconds
        setTimeout(button7, 3 * 1000);
    });

    //the seventh set of questions
    $(".button7").on("click", function () {
        //gets the value of the button clicked and stores it in a variable
        var btn_clicked = $(this).val();
        //if the value of the button clicked is 2 show the correct7 screen and add to the correct guesses
        if (btn_clicked === "2") {
            correct++
            $("#correct7").show();
        }
        //show the incorrect7 screen and add to the incorrect guesses
        else {
            incorrect++
            $("#incorrect7").show();
        }
        //hides the question
        $(".title7").hide()
        //hides the buttons
        $(".button7").hide();
        //stops the timer
        clearInterval(count_down);
        //calls the button8 function after 3 seconds
        setTimeout(button8, 3 * 1000);
    });
//the eighth set of questions
    $(".button8").on("click", function () {
         //gets the value of the button clicked and stores it in a variable
        var btn_clicked = $(this).val();
           //if the value of the button clicked is 3 show the correct8 screen and add to the correct guesses
        if (btn_clicked === "3") {
            correct++
            $("#correct8").show();
        }
        //show the incorrect8 screen and add to the incorrect guesses
        else {
            incorrect++
            $("#incorrect8").show();
        }
        //hides the question
        $(".title8").hide()
         //hides the buttons
        $(".button8").hide();
        //stops the timer
        clearInterval(count_down);
         //calls the endOfGame function after 3 seconds
        setTimeout(endOfGame, 3 * 1000)
    });


    //other functions
    //====================================================
    //the interval
    function interval() {
        timer = 30;
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