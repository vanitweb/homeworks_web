$(document).ready(function(){
    $("div").scroll(function(){
        $("span").text( x+= 1);
    });
});

$(window).scroll(function () {
	var iScrollPos = 200;
   var x = $(this).scrollTop();
    if (x > iScrollPos) {
        $(".Lock_Clock").addClass("w3-animate-bottom");
    } else {
       //Scrolling Up
    }
    iScrollPos = x;
});