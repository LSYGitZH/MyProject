$(function(){
	$(".banner_left_list li").hover(function(){
		var index=$(this).index();
		$(".right_img img").eq(index).fadeIn(400).siblings().fadeOut(200);
	});
});