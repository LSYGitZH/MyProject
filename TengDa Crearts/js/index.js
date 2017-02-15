var GLOBAL= GLOBAL || {};

$(function(){
	//头部
	$("#header").load("header.html");
	
	
	 //banner模块
    (function(){
    	var page=1;
    	$(".banner_next_page").click(function(){ 		
    	   page++;
			if(page < $(".banner_show .banner").size()-1) {
				$(".banner_show").stop(true,true).animate({"left":page*-1349+"px"},300);
			    }else{
				page=1;
				$(".banner_show").stop(true,true).animate({"left":($(".banner_show .banner").size()-1)*-1349+"px"},300,function(){
					$(".banner_show").css("left","-1349px");
				});
	
    		}
			    $(".banner_show .banner").eq(page).find("img:last-of-type").addClass("animated bounceInRight");
    			$(".banner_show .banner").eq(page).siblings(".banner_show .banner").find("img:last-of-type").removeClass("animated bounceInRight");
    	});
    	
    	$(".banner_prev_page").click(function(){
    		page--;
			if (page>0) {
				$(".banner_show").stop(true,true).animate({"left":page*-1349+"px"},200);
			    }else{
				page=$(".banner_show .banner").size()-2;
				$(".banner_show").stop(true,true).animate({"left":0},300,function(){
				$(".banner_show").css("left",($(".banner_show .banner").size()-2)*-1349+"px");
				});
    		}
			    $(".banner_show .banner").eq(page).find("img:last-of-type").addClass("animated bounceInLeft");
    			$(".banner_show .banner").eq(page).siblings(".banner_show .banner").find("img:last-of-type").removeClass("animated bounceInLeft");
    	});
    	
    	
    })();

     //our service模块
     (function(){
     	
     	$(".our_service").hover(function(){
     		$(this).find(".our_service_bg_blue").stop().delay(500).animate({"top":"0"},500);
     		$(this).siblings().find(".our_service_bg_blue").stop().animate({"top":"325px"},0);
     	},function(){
     	$(this).find(".our_service_bg_blue").stop().animate({"top":"325px"},0);
     });
     })();

	//our case模块
	(function(){
		var page2=0;
		var arr3DLunbo=$(".lunbo_3d_content");
		var arrLi=$(".our_case_content ul li");
		var oTwoPrevPage=$(".our_case_prev_page");
		var oTwoNextPage=$(".our_case_next_page");
		oTwoNextPage.click(function(){
			page2++;
			if (page2>=arr3DLunbo.length-1) {
				page2=arr3DLunbo.length-1;
				$(this).css("display","none");
			}
			Show3D(); 
			$(".lunbo_3d_content").eq(page2).find(".our_case").css({"transform":"rotateY(360deg)"});
		});
		oTwoPrevPage.click(function(){
			page2--;
			if (page2<=0) {
				page2=0;
				$(this).css("display","none");
			}
			Show3D();
			$(".lunbo_3d_content").eq(page2).find(".our_case").css({"transform":"rotateY(-360deg)"});
		});
		arrLi.click(function(){
			var index=$(this).index();
		     page2=index;
		     Show3D();
		     if (index>page2) {
		     	$(".lunbo_3d_content").eq(page2).find(".our_case").css({"transform":"rotateY(360deg)"});
		     }else{
		     	$(".lunbo_3d_content").eq(page2).find(".our_case").css({"transform":"rotateY(-360deg)"});
		     }
		});
		Show3D();
		function Show3D(){
			if (page2<arr3DLunbo.length-1) {
				oTwoNextPage.css("display","block");
			}
			if (page2>0) {
				oTwoPrevPage.css("display","block");
			}
			arrLi.eq(page2).css("background-color","#f18906").siblings("li").css("background-color","#cccccc");
		    $(".lunbo_3d_content").eq(page2).fadeIn(200).siblings(".lunbo_3d_content").fadeOut(200);
		    $(".lunbo_3d_content").siblings(".lunbo_3d_content").find(".our_case").css({"transform":"rotateY(0deg)"});
		}
	})();

    //点击页面向上移动模块
    (function(){
    	var timer=0;
    	$(".nextpage").click(function(){
    		var time=0;
    		timer=setInterval(function(){
    			time++;
    			window.scrollBy(0,100);
    			if (time==6) {
    				clearInterval(timer);
    				timer=0;
    			}
    		},50);
    	});
    	$(".mouse_anima").click(function(){
    		var time=0;
    		timer=setInterval(function(){
    			time++;
    			window.scrollBy(0,100);
    			if (time==6) {
    				clearInterval(timer);
    				timer=0;
    			}
    		},50);
    	});
    	
    })();

	//尾部
	$("#footer").load("footer.html");
});