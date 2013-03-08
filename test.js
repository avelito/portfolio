$(document).ready(function(){
	// Look up the '#about' element and call the hover method, giving it two functions.
// The first function is run when the mouse is moved over the element, adding the class 'ss-heart' to the '#circle1' element.
// The second function runs when the mouse leaves the element area, removing that class.
    $("#about").hover(function() {
      $("#circle1").addClass("ss-heart");
    }, function() {
      $("#circle1").removeClass("ss-heart");
    });


 $("#res").hover(function() {
      $("#circle3").addClass("ss-list");
    }, function() {
      $("#circle3").removeClass("ss-list");
    });

$("#git").hover(function() {
      $("#circle5").addClass("s octocat");
    }, function() {
      $("#circle5").removeClass("ss octocat");
    });

$("#twit").hover(function() {
      $("#circle2").addClass("ss twitter");
    }, function() {
      $("#circle2").removeClass("ss twitter");
    });

$("#cont").hover(function() {
      $("#circle4").addClass("ss-mail");
    }, function() {
      $("#circle4").removeClass("ss-mail");
    });

});
