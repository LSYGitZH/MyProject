$(function(){
	$(window).scroll(function(){
		var scrollTop=$(this).scrollTop();
		if (scrollTop>=108) {
//		$("header").css("display","none");
		$(".header_fixed_list_box").css("display","block");
	}else{
//		$("header").css("display","block");
		$(".header_fixed_list_box").css("display","none");
	}
	});
	
	
});