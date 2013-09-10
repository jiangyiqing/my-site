$(document).ready(function(){
	$("h4").hide();
	$("#giftbox").hide().fadeIn(2000);
	$('#cake').hide();
	$("button").click(function(){
		$(".word").fadeIn(2000);
    	$("#cake").fadeIn(4000);
    	$(".word").css("color","#00EBFF");	

    	$("h1").fadeOut(100);
    	$("h1").fadeIn(2000,function () {
    			$("h1").css("color","red");	
    	});
    
	});

	
});