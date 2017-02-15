

$(function(){
	var oLi=$(".header_menu li");
	oLi.click(function(){
		$(this).find("a").find("span").css("display","inline-block");
		$(this).addClass("menu");
		$(this).siblings().find("a").find("span").css("display","none");
		$(this).siblings().removeClass("menu");
	})
	
	
	$(".main_head_box .left_chinese").eq(1).click(function(){
		$(this).css("background-color","#26389a").siblings(".left_chinese").css("background-color","#0d0b0c");
		$(".news_box").eq(0).css("display","block");
		$(".news_box").eq(1).css("display","none");
	})
	$(".main_head_box .left_chinese").eq(2).click(function(){
		$(this).css("background-color","#26389a").siblings(".left_chinese").css("background-color","#0d0b0c");
		$(".news_box").eq(0).css("display","none");
		$(".news_box").eq(1).css("display","block");
	    
	})
	var arrSelect=$(".banner_img_select .select_box");
	var page=0;
	arrSelect.hover(function(){
		$(this).find(".img").css("border-color","#e9d900");
		$(this).siblings().find(".img").css("border-color","#f7f7f9");
	$(".banner_img_box>img").eq($(this).index()).css("display","block").siblings().css("display","none");
	});


});