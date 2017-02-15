$(function(){
	//头部模块
	$("#header").load("header.html");
	
	//4大优势模块
	(function(){
		$(".strength_box ul li").hover(function(){
			var index=$(this).index();
			$(".strength_text_box").find("p").eq(index).css("display","block");
			$(".strength_text_box").find("p").eq(index).siblings().css("display","none");
		});
	})();
	
	//尾部模块
	$("#footer").load("footer.html");
});
