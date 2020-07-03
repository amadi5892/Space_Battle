$(function () {
    // Global variables
    var num = 8100 - window.innerWidth;
    var lane = $(".lane");
    var speed = 50;
    var letters = 'ASKL';
    var lettersLength = letters.length;


    

    // The Game Function
    var game = $(function (event) {
        // for now the racetrack moves when we hit any key
        var key = event.keyCode;

        // hit any key to start movement
        $(document).keypress("a", function () {
            $(".lane").animate({
                "left": "-=7600"
            }, 6000)

        });

        // Generate random letters for user prompts
    var result = letters.charAt(Math.floor(Math.random() * lettersLength));
        
    console.log(result)





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