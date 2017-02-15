$(function(){
	$(".input").find(".input_type_box").click(function(event){
		if ($(this).find("ul").css("display")=="none") {
			$(".input_type").eq(0).find(".input").find(".input_type_box").find("ul").slideUp(200);
			$(".input_type").eq(1).find(".input").find(".input_type_box").find("ul").slideUp(200);
			$(this).find("ul").slideDown(300);
		}else{
			$(this).find("ul").slideUp(200);
		}	
		event.stopPropagation();
	});
	$(".input_type .input .input_type_box ul li").click(function(){
		$(this).parent("ul").siblings("span").text($(this).text());
		$(this).addClass("now").siblings("li").removeClass("now");
	});
	$(document).click(function(){
		$(".input").find(".input_type_box").find("ul").slideUp(200);
	});
	$(".input_type .input .input_type_box ul li").hover(function(){
		$(this).css({"background-color":"#dddddd","color":"#000000"});
		$(this).siblings().css({"background-color":"#363636","color":"#FFFFFF"});
	});
	
});
