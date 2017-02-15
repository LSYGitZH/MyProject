$(function() {
	//	头部模块
	$("#header").load("header.html");

	//  our case模块
	(function() {
			$(".product").hover(function(ev) {
				      $(this).find("a").stop().animate({"opacity":1},300);
				      $(this).siblings(".product").find("a").stop().animate({"opacity":0},300);
						var oEvent = window.event || ev;
						var screenW = $(this).width();
						var screenH = $(this).height();
						var offsetTop = $(this).offset().top;
						var offsetLeft = $(this).offset().left;
						var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
						var scrollLeft=document.documentElement.scrollLeft || document.body.scrollLeft;
						var pagex = oEvent.clientX+scrollLeft;
						var pagey = oEvent.clientY+scrollTop;
						var x = pagex - offsetLeft - screenW/2;
						var y = pagey - offsetTop - screenH/2;
						var direction = Math.round((((Math.atan2(y,x)*180/Math.PI) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
                       // var res = Math.atan2(y, x) / (Math.PI / 180) + 180;
						switch(direction) {
							case 0:
								$(this).find(".before_anima").css({
									left: 0,
									top: -screenH
								}).animate({
									top: 0
								}, 300);
								break;
							case 1:
								$(this).find(".before_anima").css({
									left: screenW,
									top: 0
								}).stop(true,true).animate({
									left: 0
								}, 300);
								break;
							case 2:
								$(this).find(".before_anima").css({
									left: 0,
									top: screenH
								}).stop(true,true).animate({
									top: 0
								}, 300);
								break;
							case 3:
								$(this).find(".before_anima").css({
									left: -screenW,
									top: 0
								}).stop(true,true).animate({
									left: 0
								}, 300);
								break;
						}
				},function(ev) {
					$(this).find("a").stop().animate({"opacity":0},300);
					var oEvent = window.event || ev;
						var screenW = $(this).width();
						var screenH = $(this).height();
						var offsetTop = $(this).offset().top;
						var offsetLeft = $(this).offset().left;
						var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
						var scrollLeft=document.documentElement.scrollLeft || document.body.scrollLeft;
						var pagex = oEvent.clientX+scrollLeft;
						var pagey = oEvent.clientY+scrollTop;
						var x = pagex - offsetLeft - screenW/2;
						var y = pagey - offsetTop - screenH/2;
						var direction = Math.round((((Math.atan2(y, x) * 180 / Math.PI) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
//						var res = Math.atan2(y, x) / (Math.PI / 180) + 180;
					    switch(direction) {
							case 0:
							$(this).find(".before_anima").stop(true,true).animate({
								left: 0,
								top: -screenH+"px"
								}, 300);
								break;
							case 1:
								$(this).find(".before_anima").stop(true,true).animate({
									left: screenW+"px",
									top: 0
								}, 300);
								break;
							case 2:
								$(this).find(".before_anima").stop(true,true).animate({
									left: 0,
									top: screenH+"px"
								}, 300);
								break;
							case 3:
								$(this).find(".before_anima").stop(true,true).animate({
									left: -screenW+"px",
									top: 0
								}, 300);
								break;
						}
				});
	})();

    //点击下一页模块
    (function(){
    	var page=0;
    	$(".NP_page").click(function(){
    		page++;
    		if (page>=$(".products_box").length) {
    			page=0;	
    		}
    		if (page==0) {
    				$(this).text("下一页");
    		}	
    		if (page==$(".products_box").length-1) {
    			$(this).text("上一页");
    		   }
    		
    		$(".products_box").eq(page).css("opacity",1).siblings(".products_box").css("opacity",0);
    		$(".all_page").find("#page_num").text(page+1);
    	});
    	$(".all_page").find(".all_page_num").text($(".product").size());
    })();
    
//	尾部模块
$("#footer").load("footer.html");
});