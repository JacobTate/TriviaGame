$(document).ready(function () {
    //hides everything not need at this time
    //============================================
    $("#timer").hide();
    $(".button1").hide();
    $(".button2").hide();

    //variables
    //============================================
    var timer = 29;
    
    //onclick functions
    //======================================================================
    //runs when you press the start button
    $("#start").on("click", function () {
        var count_down = setInterval(time, 1000);
        $("#timer").show();
        $("#start").hide();
        $(".button1").show();
        
    });
    
    //runs when you click one of the first buttons that pop up
    $(".button1").on("click", function () {
        //gets the button clicked value and stores it in a variable
        var btn_clicked = $(this).val();
        //if the button clicked value is 3 you win
        if (btn_clicked === "3") {
            console.log("45")
            $(".button1").hide();
            setTimeout(button2, 3000);
        }
        //else you lose
        else {
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
            console.log("86")
        }
        //else you lose
        else {
            console.log("68")
        }
    });

    //other functions
    //====================================================
    function time(){
        timer--
        $("#timer").text("remaining time:" + timer);
       }
    //shows the second buttons
   

    function button2() {
        $(".button2").show();
    }

});