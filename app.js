$(function () {
    // Global variables
    var num = 4300 - window.innerWidth;
    var lane = $(".lane");
    var speed = 50;

    // The Game Function
    var game = $(function (event) {
        // for now the racetrack moves when we hit any key
        var key = event.keyCode;

        // hit any key to start movement
        $(document).keypress("a", function () {
            $(".lane").animate({
                "left": "-=3800"
            }, 2000)

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