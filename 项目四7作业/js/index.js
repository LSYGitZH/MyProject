$(function(){
   $(window).scroll(function(){
   	if ($(this).scrollTop()>10) {
   		$(".header-box").css({"background-color":"black"});
   		$(".header").css({"line-height":"60px"});
   		$("#header-logo").css({"margin-top":"10px"});
   	}else{
   		$(".header-box").css({"background-color":"transparent"});
   		$(".header").css({"line-height":"80px"});
   		$("#header-logo").css({"margin-top":"20px"});
   	}
   });
   //轮播1
   (function(){
   	var page=1;
   	$(".next-page").click(function(){
   		page++;
   		if (page<$(".slider .slide").length-1) {
   			$(".slider").stop(true,true).animate({"left":page*-100+"%"},300);
   		}else{
   			page=1;
   			$(".slider").stop(true,true).animate({"left":($(".slider .slide").size()-1)*-100+"%"},300,function(){
					$(".slider").css("left",-100+"%");
				});
   		} 
   	});
    $(".prev-page").click(function(){
    	page--;
   		if (page>0) {
   			$(".slider").stop(true,true).animate({"left":page*-100+"%"},300);
   		}else{
   			page=$(".slider .slide").size()-2;
   			$(".slider").stop(true,true).animate({"left":0},300,function(){
					$(".slider").css("left",($(".slider .slide").size()-2)*-100+"%");
				});
   		} 
   	});
    	
   })();
   //轮播2
   (function(){
   	
   		$(".next-page2").click(function(){
   		
   			$(".service-show").stop(true,true).animate({"left":"-370px"},300);
   	
   	});
   	$(".prev-page2").click(function(){
   		
   			$(".service-show").stop(true,true).animate({"left":0},300);
   	
   	});
   })();
   //轮播3
   (function(){
   	var page2=1;
   	$(".next-page3").click(function(){
   		page2++;
   		if (page2<$(".last-lunbo-show li").length-1) {
   			$(".last-lunbo-show").stop(true,true).animate({"left":page2*-960+"px"},300);
   		}else{
   			page2=1;
   			$(".last-lunbo-show").stop(true,true).animate({"left":($(".last-lunbo-show li").size()-1)*-960+"px"},300,function(){
					$(".last-lunbo-show").css({"left":-960+"px"});
				});
   		} 
   	});
    $(".prev-page3").click(function(){
    	page2--;
   		if (page2>0) {
   			$(".last-lunbo-show").stop(true,true).animate({"left":page2*-960+"px"},300);
   		}else{
   			page2=$(".last-lunbo-show li").size()-2;
   			$(".last-lunbo-show").stop(true,true).animate({"left":0},300,function(){
					$(".last-lunbo-show").css("left",($(".last-lunbo-show li").size()-2)*-960+"px");
				});
   		} 
   	});
    	
   })();
});

