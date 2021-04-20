$(document).ready(function() {
    $(".first-list").addClass("active");

$(".nav-item").click(function(){
$(".nav-item").removrClass("active");
$(this).addClass("active");
});
$("#toggler").click(function(event){

    $('#wrap').toggleClass('toggled');

var right= $('.sidebar').css("right");
if(right =="0px")
{
$('.sidebar').css({"right":"-17rem"});
$('.layer').fadeout();
}
else {
    $('.sidebar').css({"right":"0"});
     $('.layer').fadeoIn();
}

    });
$(".layer").click(function(){
    
    $(".sidebar").css({"right":"-17rem"});
    $('.layer').fadeOut();
});
$(".search-icon").click(function(){
    $(".search-input").slideToggle("slow")
});

});