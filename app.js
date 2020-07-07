$(function () {
    // Global variables
    var num = 8100 - window.innerWidth;
    var lane = $(".lane");
    var lane_initial_pos = parseInt(lane.css('left'));
    var letters = 'ASKL';
    var lettersLength = letters.length;
    var car1 = $("#car1");
    var car2 = $("#car2");
    var car1_initial_pos = parseInt(car1.css('left'));
    var car2_initial_pos = parseInt(car2.css('left'));
    var result = '';
    var distance = car1_initial_pos - car2_initial_pos;
    
    
    console.log(distance)

    // The title will fade out when the 'Start Game' button is hit
    $(".start").click(function () {
        $(".title").fadeOut("slow", function () {});
    });

    // The Gear Display will be hidden when the document is ready
    $(function () {
        $(".gear").hide();
    });

    // The Prompt Display will be hidden when the document is ready
    $(function () {
        $(".prompt").hide();
    });

    // The Result Display will be hidden when the document is ready
    $(function () {
        $(".result").hide();
    });

    // Flame will be hidden when the document is ready
    $(function () {
        $("#flame").hide();
    });

    // Rules will be hidden when the document is ready
    $(function () {
        $(".rules").hide();
    });

    // When the 'Start Game' button is clicked the button will fade out
    $(".start").click(function () {
        $(".start").fadeOut("slow", function () {});
    });

    // When the 'Start Game' button is clicked the Gear Display will fade in
    $(".start").click(function () {
        $(".gear").fadeIn("slow", function () {});
    });

    // When the 'Start Game' Button is clicked the Prompt Display will fade in
    $(".start").click(function () {
        $(".prompt").fadeIn("slow", function () {});
    });
    
    // When the Rules button is clicked the Rules will fade in 
    $(".instruct").click(function () {
        $(".rules").fadeIn("slow", function () {});
    });
    
    // When the Close button is clicked the Rules will fade out
    $(".close_rules").click(function () {
        $(".rules").fadeOut("slow", function () {});
    });

    var lane_cur_pos = parseInt(lane.css('left'));
    

    // The Game Function
    var game = $(function (event) {

        // for now the racetrack moves when we hit any key
        var key = event.keyCode;

        // hit any key to start movement
        $(".start").click(function () {
            $(".lane").animate({
                "left": "-=7600"
            }, 12000, function() {
                var car1_cur_pos = parseInt(car1.css('left'));
                var car2_cur_pos = parseInt(car2.css('left'));
                distance = car1_cur_pos - car2_cur_pos;
                if(distance > 0) {
                    $(".result").html("Winner!").fadeIn("slow", function() {

                    });
                } else if(distance === 0){
                    $(".result").html("It's A Tie").fadeIn("slow", function() {
                        
                    });;
                } else {
                    $(".result").html("You Lose").fadeIn("slow", function() {
                        
                    });;
                }
                console.log(distance)
            })

            // Generate random letters for user prompts
            var tracker = 0;
            var randoLetter = setInterval(function () {
                result = letters.charAt(Math.floor(Math.random() * lettersLength));
                $(".prompt").html("Press: " + result).fadeIn(600, function () {

                }).fadeOut(1400, function () {



                });
                tracker++;



                console.log(result)
                console.log(tracker)

                // Canceled Random Letter Generator after 4 iteration 
                // Show flame when it enters gear 4
                if (tracker === 4) {
                    clearInterval(randoLetter)
                };

                
                

            }, 2000);




            // Controls & Gear Display
            var gear = 1;
            showGear = $(".gear").html("Gear: " + gear);

            $(document).on('keydown', function (event) {
                var key = event.keyCode;
                var numRes = result.charCodeAt();
                var count = 0;

                if (count < 2) {
                    if (key === numRes) {
                        forward1();
                        count++;
                        gear++;
                    } else {
                        backward1();
                        forward2();
                        count--;
                    }
                    showGear = $(".gear").html("Gear: " + gear);
                };



            });



            // Move user car forward & backward
            function forward1() {
                car1.css('left', parseInt(car1.css('left')) + 50);
            };

            function backward1() {
                car1.css('left', parseInt(car1.css('left')) - 50);
            }

            //Move computer's car backward
            function forward2() {
                car2.css('left', parseInt(car2.css('left')) + 50);
            }

            console.log(lane_cur_pos)

        });

        
        
        
    });




})



// $(document).keypress("a", function() {
//     $(".container").animate({
//         "left": -num
//     }, 2000)

// });

// $(".box2").animate({
//     "left": window.innerWidth - 80
// }, 2000);


// $(document).keydown(function(event) {
//     alert(event.keyCode);
// });