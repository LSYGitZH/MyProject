
var GLOBLE=GLOBLE || {};
$(function(){
	//开始时的动画
	(function(){
		GLOBLE.welcomeOver=false;
		doWelcomeAnimate();
		function doWelcomeAnimate(){
			var screenH=window.innerHeight;
			GLOBLE.animateTimer=setTimeout(function(){
				$(".banner_content1 .banner_animate_box").animate({"margin-top":"66px"},500,function(){
					
					setTimeout(function(){
						$(".banner_content1 .banner_one_head_c").show().addClass("animated fadeInUp");
					},200);
					setTimeout(function(){
						$(".banner_content1 .banner_one_head_e").show().addClass("animated fadeInUp");;
					},400);
					setTimeout(function(){
						$(".banner_content1 .slogan_box").show().addClass("animated fadeInUp");;
					},600);
					setTimeout(function(){
						$(".banner_content1 .market").show().addClass("animated fadeInUp");;
					},800);
					setTimeout(function(){
						$(".banner_content1 .state").show();
					},1000);
				});	
			},4000);
			setTimeout(function(){
				$(".banner_content1").animate({"top":-screenH+"px"},function(){
					GLOBLE.welcomeOver=true;
				});
			},7000);
			$(".banner_content1").dblclick(function(){
				$(".banner_content1").animate({"top":-screenH+"px"},function(){
					GLOBLE.welcomeOver=true;
					clearTimeout(animateTimer);
					
				});
			});
		}
	})();
	//全屏轮播				
	(function(){
		var pageGZ=0;
		function Resize(){
			var oBannerBox=$("#banner_box");
	       var oBannerShow=$("#banner_show_box");
	        var arrBannerContent=$(".banner_content");
	        var arrBannerContent1=$(".banner_content1");
	      var oUl=$("#header_list");
	      var oLi=$("#header_list li");
	 var screenH=window.innerHeight;
//	 var screenW=document.documentElement.clientWidth;
	 oBannerBox.css({"height":screenH+"px"});
//	 oBannerShow.css({"height":arrBannerContent.length-1*screenH+"px"});
	 arrBannerContent.css({"height":screenH+"px"});
	  arrBannerContent1.css({"height":screenH+"px"});
	  
	  oLi.click(function(){
	  	var index=$(this).index();
		var oLeft=$(this).offset().left-oUl.offset().left;
	    var oWidth=$(this).width();
		var oDotPosit=oWidth/2+oLeft;
	    $(this).addClass("now").siblings().removeClass("now");
		if (index==4) {
			index=3;
		}else if (index==5) {
			window.open("index.html");
		}
		if (index>0) {
			++index;
		}

		oBannerShow.stop().animate({"top":index*-screenH+"px"},500);
		 pageGZ=index;
         mouseWheel(ev);
	  });
	  $(".banner_one_bottom_link").click(function(){
	  	oBannerShow.stop().animate({"top":1*-screenH+"px"},500);
	  });
	}
	Resize();
	
	$(window).resize(function(){
		Resize();
		setTimeout(Resize,1);
	});
	  
	//       事件绑定
//    chrome  IE
       addEvent(window,"mousewheel",mouseWheel);
//     ff
        addEvent(window,"DOMMouseScroll",mouseWheel); 
//      滚轴事件函数
       function mouseWheel(ev){
        	var oEvent=window.event || ev;
        	 
              if(oEvent.detail) {      //ff
              	if(oEvent.detail>0) {       //下滚动
              		if (GLOBLE.welcomeOver)
              		scrollDown();
              	}else{      //向上
              		scrollUp();
              	}
              }else if (oEvent.wheelDelta) {   //chrome IE 
              	if (oEvent.wheelDelta>0) {  //上滚动
              		scrollUp();
              	}else{        //向下
              		if (GLOBLE.welcomeOver)
              		scrollDown();
              	}
              }
        }
      

                var isRunning=false; //当isRunning为TRUE时  鼠标滚轴不管事
                                      //当isRunning为FALSE时  鼠标滚轴管事
               function scrollUp() {
               	var screenH=window.innerHeight;
               	if (!isRunning) {
               		isRunning=true;
               		setTimeout(function(){
               			isRunning=false;
               		},1000);
               		
               		if (pageGZ>0) {
               		pageGZ--;
               	
               		if (pageGZ==1) {
               			--pageGZ;
               		}
               		$("#banner_show_box").stop().animate({"top":-pageGZ*screenH+"px"},500);
                     var oLeft=$("#header_list li").offset().left-$("#header_list").offset().left;
	                 var oWidth=$("#header_list li").width();
		             var oDotPosit=oWidth/2+oLeft;
		             if (pageGZ==0) {
		             	pageGZ=1;
		             }
	                $("#header_list li").eq(pageGZ-1).addClass("now").siblings().removeClass("now");
               	}
              	
               	}
               	
              }
             
               function scrollDown(){
               	var screenH=window.innerHeight;
               	if (!isRunning) {
               		isRunning=true;
               		setTimeout(function(){
               		isRunning=false;
               		},1000);
               		
               		if (pageGZ<$(".banner_content").size()-1) {
               		    pageGZ++;
           
               		if (pageGZ==1) {
               			++pageGZ;
               		}
               		
               		$("#banner_show_box").stop().animate({"top":-pageGZ*screenH+"px"},500);
               		 var oLeft=$("#header_list li").offset().left-$("#header_list").offset().left;
	                 var oWidth=$("#header_list li").width();
		             var oDotPosit=oWidth/2+oLeft;
	                $("#header_list li").eq(pageGZ-1).addClass("now").siblings().removeClass("now");
               	}
               	}      		
              }  

              function addEvent(ele,type,listener){
                 	if (ele.addEventListener) {
                 		ele.addEventListener(type,listener);
                 	}else{
                 		ele.attachEvent("on"+type,listener);
                 	}
                 }		
         
	})();
	
	//概述模块
	(function(){
		var bTwoPage=0;
		var oPrev=$(".banner_two_prev");
		var oNext=$(".banner_two_next");
		var oBannerTwoShow=$(".banner_two_show_box");
		oNext.click(function(){
			bTwoPage++;
			if (bTwoPage>=$(".banner_two_show_box .banner_two_content").size()) {
				bTwoPage=$(".banner_two_show_box .banner_two_content").size()-1;
			    $(this).css("opacity",0.3);
			}else if (bTwoPage>0) {
			    	oPrev.css("opacity",1);
			    }
			    
			
			bannerTwolunbo();
		});
		oPrev.click(function(){
			bTwoPage--;
			if (bTwoPage<0) {
				bTwoPage=0; 
				$(this).css("opacity",0.3);
			}else if (bTwoPage<$(".banner_two_show_box .banner_two_content").size()-1) {
					oNext.css("opacity",1);
				}
				
			
			bannerTwolunbo();
		});
		function bannerTwolunbo(){
			$(".banner_two_show_box").stop().animate({"left":bTwoPage*-866+"px"},300);
		   
		}
	})();
	
	//小鸟掌云模块
    (function(){
		$(".banner_content .select_box .select").click(function(){
		      var index=$(this).index();
		      $(this).addClass("select2").siblings().removeClass("select2");
				$(".banner_four_text_box").eq(index).fadeIn(100).siblings(".banner_four_text_box").fadeOut(100);
			
		});
	})();

});