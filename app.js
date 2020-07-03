$(function() {
    
    var num = 4300 - window.innerWidth;
    
    $(document).keypress("a", function() {
        $(".container").animate({
            "left": -num
        }, 2000)
        // alert(num)
    });


})






// $(document).keypress("a", function() {
//     $(".container").animate({
//         "left": -num
//     }, 2000)

// });

$(".box2").animate({
    "left": window.innerWidth - 80
}, 2000);


// $(document).keydown(function(event) {
//     alert(event.keyCode);
// })

// var num = 4300 - window.innerWidth;
