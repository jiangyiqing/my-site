$(document).ready(function(){

    $('#mouseenter1').mouseenter(function(){
   
    	$(this).fadeOut();
    });

    $('#ready').click(function(){
    	$(this).fadeOut(1000);
    });

    $('#clicktohide').click(function(){   // 这一行 表示 点击
    	$(this).fadeOut(1000);   // 隐藏  fadeOut()
    });

    $('#large').click(function(){
    	$('#large').css(
    			{	"width":"+=30px",
    			"height":'+=30px',
    			"background-color":"yellow",
    			}
    		);

    });


    $('#small').click(function(){
    		$('#small').css(
    				{
    					"width":"-=15px",
    					"height":"-=15px",
    					"background-color":"#ABCDEF",
    				}
    			);   	
    });

    $('#moveright').click(function(){
   
    	$('#moveright').animate({left:"+=30px"});
    	$('#moveright').animate({top:"+=30px"});
    });
    $('#notready').hide(1200)
});