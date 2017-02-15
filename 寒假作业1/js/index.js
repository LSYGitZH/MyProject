$(function(){
	$(".lunbo_select li").click(function(){
		var index=$(this).index();
		$(this).addClass("now").siblings().removeClass("now");
		$(".img_box").eq(index).fadeIn(400)
		$(".img_box").eq(index).siblings(".img_box").fadeOut(200);
	});
	
	$(".header_list li").click(function(){
		$(this).css("background-image","url(img/topNav-bg_03.png)").siblings().css("background-image","url(img/topNav-bg_05.png)");
	});
});