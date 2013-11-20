$(document).ready(function(){
	    $('#sun').click(function(){
   
    	$('#sun').animate({left:"+=50px"});
    	$('#sun').css("background-image", "-webkit-gradient(linear, 50% 50%, 100% 100%, from(#FF0000), to(#FF7000))")
    });
});