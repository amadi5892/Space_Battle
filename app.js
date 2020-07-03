$(function () {
    // Global variables
    var num = 8100 - window.innerWidth;
    var lane = $(".lane");
    var speed = 50;
    var letters = 'ASKL';
    var lettersLength = letters.length;
    var car1 = $(".box1");
    var car2 = $(".box2");
    var initial_pos = parseInt(car1.css('left'));
    

    // $(".prompt").html("Hello You")

    // The Game Function
    var game = $(function (event) {

        // for now the racetrack moves when we hit any key
        var key = event.keyCode;

        // hit any key to start movement
        $(document).keypress(function () {
            $(".lane").animate({
                "left": "-=7600"
            }, 12000)

            // Generate random letters for user prompts
            setInterval(function () {
                var result = letters.charAt(Math.floor(Math.random() * lettersLength));
                $(".prompt").html(result);
                console.log(result)
            }, 2000);

            
        });

        // Move user car forward
        function forward() {
            car1.css('left', parseInt(car1.css('left')) + 50)
        };

        $(document).on('keydown', function(event) {
            var key = event.keyCode;
            if(key === 65) {
                forward()
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