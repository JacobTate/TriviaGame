$(document).ready(function () {
    //hides everything not need at this time
    //============================================
    $("#timer").hide();
    $(".button1").hide();
    $(".button2").hide();
    $(".button3").hide();
    $(".button4").hide();
    $(".button5").hide();
    $(".button6").hide();
    $(".button7").hide();
    $(".button8").hide();

    //variables
    //============================================
    var timer = 30;
    var count_down;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    //onclick functions
    //======================================================================
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
            clearInterval(count_down);
            // timer = 30;
            $(".button1").hide();
            setTimeout(button2, 3 * 1000);

        }
        //else you lose
        else {
            incorrect++
            clearInterval(count_down);
            console.log("54")
            $(".button1").hide();
            setTimeout(button2, 3000);

        }

    });


    //runs when first buttons are hidden and the second buttons pop up
    $(".button2").on("click", function () {
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 you win
        if (btn_clicked === "1") {
            correct++
            clearInterval(count_down);
            //timer = 30;
            $(".button2").hide();
            setTimeout(button3, 3 * 1000);



        }
        //else you lose
        else {
            incorrect++
            clearInterval(count_down);
            //timer = 30;
            $(".button2").hide();
            setTimeout(button3, 3 * 1000);


        }
    });

    //runs when second buttons are hidden and the third buttons pop up
    $(".button3").on("click", function () {
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 you win
        if (btn_clicked === "4") {
            correct++
            clearInterval(count_down);
            //timer = 30;
            $(".button3").hide();
            setTimeout(button4, 3 * 1000);



        }
        //else you lose
        else {
            incorrect++
            clearInterval(count_down);
            //timer = 30;
            $(".button3").hide();
            setTimeout(button4, 3 * 1000);
        }
    });

     //runs when third buttons are hidden and the fourth buttons pop up
     $(".button4").on("click", function () {
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 you win
        if (btn_clicked === "2") {
            correct++
            clearInterval(count_down);
            //timer = 30;
            $(".button4").hide();
            setTimeout(button5, 3 * 1000);



        }
        //else you lose
        else {
            incorrect++
            clearInterval(count_down);
            //timer = 30;
            $(".button4").hide();
            setTimeout(button5, 3 * 1000);
        }
    });

    //runs when fourth buttons are hidden and the fifth buttons pop up
    $(".button5").on("click", function () {
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 you win
        if (btn_clicked === "3") {
            correct++
            clearInterval(count_down);
            //timer = 30;
            $(".button5").hide();
            setTimeout(button6, 3 * 1000);



        }
        //else you lose
        else {
            incorrect++
            clearInterval(count_down);
            //timer = 30;
            $(".button5").hide();
            setTimeout(button6, 3 * 1000);
        }
    });

    //runs when fifth buttons are hidden and the sixth buttons pop up
    $(".button6").on("click", function () {
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 you win
        if (btn_clicked === "2") {
            correct++
            clearInterval(count_down);
            //timer = 30;
            $(".button6").hide();
            setTimeout(button7, 3 * 1000);



        }
        //else you lose
        else {
            incorrect++
            clearInterval(count_down);
            //timer = 30;
            $(".button6").hide();
            setTimeout(button7, 3 * 1000);
        }
    });

      //runs when sixth buttons are hidden and the seventh buttons pop up
      $(".button7").on("click", function () {
        var btn_clicked = $(this).val();
        //if the button clicked value is 1 you win
        if (btn_clicked === "2") {
            correct++
            clearInterval(count_down);
            //timer = 30;
            $(".button7").hide();
            setTimeout(button8, 3 * 1000);



        }
        //else you lose
        else {
            incorrect++
            clearInterval(count_down);
            //timer = 30;
            $(".button7").hide();
            setTimeout(button8, 3 * 1000);
        }
    });

    $(".button8").on("click", function () {
        var btn_clicked = $(this).val();
        if (btn_clicked === "3") {
            correct++
            clearInterval(count_down);
            $(".button8").hide();
        }
        //else you lose
        else {
            incorrect++
            clearInterval(count_down);
          $(".button8").hide();    
        }
        $("#endgame").append("correct:" + correct + "<br>" + "incorrect:" + incorrect + "<br>" + "unanswered:" +  unanswered)
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
            console.log('time')
            unanswered++
        }
    }
    //shows the first buttons
    function button1() {
        $(".button1").show();
    }
    //shows the second buttons
    function button2() {
        $(".button2").show();
        interval();
    }

    //shows the third buttons
    function button3() {
        $(".button3").show();
        interval();
    }

    //shows the fourth buttons
    function button4() {
        $(".button4").show();
        interval();
    }

    //shows the fifth buttons
    function button5() {
        $(".button5").show();
        interval();
    }

    //shows the sixth buttons
    function button6() {
        $(".button6").show();
        interval();
    }

    //shows the seventh buttons
    function button7() {
        $(".button7").show();
        interval();
    }

    //shows the eighth buttons
    function button8() {
        $(".button8").show();
        interval();
    }






});