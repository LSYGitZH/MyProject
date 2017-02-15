$(function(){
	//头部模块
	$(".header ul li a").click(function(){
		$(this).addClass("now").parent("li").siblings().find("a").removeClass("now");
	});
	
	//轮播图模块
	(function(){
//  var nextPage=$("#nextpage");
//	var prevPage=$("#prevpage");
//	var oShow=$(".banner_show");
//	var arrLi=$(".banner_show li");
	var page=1;
	$("#nextpage").click(function(){
		page++;
		if (page<$(".banner_show li").size()-1) {
			$(".banner_show").stop(true,true).animate({"left":page*-100+"%"},300);
		}else{
			page=1;
				$(".banner_show").stop(true,true).animate({"left":($(".banner_show li").size()-1)*-100+"%"},300,function(){
					$(".banner_show").css("left",-100+"%");
				});
		}
	});
	$("#prevpage").click(function(){
		page--;
		if (page>0) {
			$(".banner_show").stop(true,true).animate({"left":page*-100+"%"},300);
		}else{
			page=$(".banner_show li").size()-2;
				$(".banner_show").stop(true,true).animate({"left":0},300,function(){
					$(".banner_show").css("left",($(".banner_show li").size()-2)*-100+"%");
				});
		}
	});
	})();
	
	//售后维修模块
	(function(){
		$(".gengduo").click(function(){
			$(".customer_service_box ul:last").slideToggle();
		});
		
	})();
});