

$(function(){
	
	var oLi=$(".header_menu_box>li");
	oLi.hover(function(){
		$(this).css({"background-color":"#ffab34","padding":"14px 15px 0px 15px","opacity":"0.8"}).siblings().css({"background-color":"#ffffff","padding":"14px 10px 0px 10px","opacity":"1"});
		
		$(this).find(".a").css({"font-size": "16px","color":"white"});
		$(this).siblings().find(".a").css({"font-size": "13px","color":"#929292"});
		$(this).find("ul").stop().slideDown(300);
		
	},function(){
		$(this).css({"background-color":"#ffffff","padding":"14px 10px 0px 10px","opacity":"1"});
		$(this).find(".a").css({"font-size": "13px","color":"#929292"});
//		$(this).find("ul").stop().slideToggle();
        $(this).find("ul").stop().slideUp(100);
	});
	

});