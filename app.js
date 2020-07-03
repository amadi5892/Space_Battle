$(function () {
    // Global variables
    var num = 8100 - window.innerWidth;
    var lane = $(".lane");
    var speed = 50;
    var letters = 'ASKL';
    var lettersLength = letters.length;
    var car1 = $(".box1");
    var car2 = $(".box2");
    var initial_pos = parseInt(car1.css('left')); // may not need
    var result = '';


    // $(".prompt").html("Hello You")

    // The Game Function
    var game = $(function (event) {

        // for now the racetrack moves when we hit any key
        var key = event.keyCode;

        // hit any key to start movement
        $(".start").click(function () {
            $(".lane").animate({
                "left": "-=7600"
            }, 12000)

            // Generate random letters for user prompts
            setInterval(function () {
                result = letters.charAt(Math.floor(Math.random() * lettersLength));
                $(".prompt").html(result);
                console.log(result)
                return result;
            }, 2000);


            // Controls
            $(document).on('keydown', function (event) {
                var key = event.keyCode;

                var numRes = result.charCodeAt();
                var count = 0;

                if (count < 2) {
                    if (key === numRes) {
                        forward1();
                        count++;
                    } else if (key !== numRes) {
                        console.log(key)
                        backward1();
                        count--;
                    }
                } else if (count === 2) {
                    if (key === numRes) {
                        forward1();
                        backward2();
                        count++;
                    } else {
                        backward1();
                        count--;
                    }
                } else if (count === 3) {
                    if (key === numRes) {
                        forward1();
                        count++;
                    } else {
                        backward1();
                        count--;
                    }
                }



            });

            // Move user car forward & backward
            function forward1() {
                car1.css('left', parseInt(car1.css('left')) + 50);
            };

            function backward1() {
                car1.css('left', parseInt(car1.css('left')) - 50);
            }

            //Move computer's car backward
            function backward2() {
                car2.css('left', parseInt(car2.css('left')) - 25);
            }



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