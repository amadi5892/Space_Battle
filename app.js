$(function () {
    // Global variables
    var num = 4300 - window.innerWidth;
    // var container = $(".container"); // may not need
    var lane = $(".lane");
    // var initial_pos = parseInt(lane.css('left')); // may not need
    var speed = 20;

    // The Game Function
    var game = $(function (event) {
        var key = event.keyCode;

        $(document).keypress("a", function () {
            $(".lane").animate({
                "left": "-=3800"
            }, 2000)
            // alert(num)
        });

        if(key === 32){
        var current_pos = parseInt(lane.css('left'));

        // move racetrack
            lane.css('left', current_pos - speed);
            };

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