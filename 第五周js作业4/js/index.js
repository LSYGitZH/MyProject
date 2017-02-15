//	
//	
//	window.onload=function(){
//				var oLastList=document.getElementById('header_last_list');
//				var arrLi=oLastList.getElementsByTagName('li');
//				var oDiv=oLastList.getElementsByTagName('div')[0];
//				
//				        oDiv.style.left=arrLi.offsetLeft+"px";
//						oDiv.style.width=arrLi.offsetWidth+"px";
//				for (var i=0;i<arrLi.length;i++) {
//					arrLi[i].onmouseover=function(){
//						oDiv.style.transition="all 0.3s";
//						oDiv.style.left=this.offsetLeft+"px";
//						oDiv.style.width=this.offsetWidth+"px";
//					}
//					arrLi[i].onmouseout=function(){
//						oDiv.style.left=this.offsetLeft+"px";
//						oDiv.style.width=this.offsetWidth+"px";
//					}
////					arrLi[i].onclick=function(){
////						oDiv.style.left=this.offsetLeft+"px";
////						oDiv.style.width=this.offsetWidth+"px";
////					}
//				}
//				
//			}
	

             $(function(){
			var oUl=$("#show_box");
			var oPrev=$("#prev");
			var oNext=$("#next");
			var arrLink=$(".link");
//			var arrLi=$("#show_box li");
//            oUl.append("<li><a><img src="img/banner1.jpg"/></a></li>");
//            oul.prepend("<li><a><img src="img/banner5.jpg"/></a></li>");
//				var arrLi=$("#show_box li");
                  var page=1;
                   arrLink.hover(function(){
                   	var Index=$(this).index();
                   
                   	$(this).css({"background-color":"#FFFFFF"}).siblings().css({"background-color":"#8a8d94"});
                    oUl.css({"left":(Index+1)*-1280+"px"});
                    start();
                    Index=page;
                   })
                   start();
			function start(){
			oNext.click(function(){
				page++;
				if (page<oUl.find("li").size()-1) {
					oUl.stop(true,true).animate({"left":page*-1280+"px"});
				}else{
					page=1;
					
					oUl.stop(true,true).animate({"left":(oUl.find("li").size()-1)*-1280+"px"},function(){
						oUl.css({"left":-1280+"px"});
					});
				}
			});
			oPrev.click(function(){
				page--;
				if (page>0) {
					oUl.stop(true,true).animate({"left":page*-1280+"px"});
				}else{
					page=oUl.find("li").size()-2;
					oUl.stop(true,true).animate({"left":0},function(){
						oUl.css("left",(oUl.find("li").size()-2)*-1280+"px");
					});
					
				}
			})
			
			}
			var firstWidth=$("#header_last_list li").width();
			$(".red").css({"width":firstWidth});
			$("#header_last_list li").hover(function(){
				
				var width=$(this).width();
				var left=$(this).position().left;
				$(".red").stop().animate({"left":left,"width":width});
			},function(){
				var cLeft=$(".red_link").position().left;
				var cWidth=$(".red_link").width();
				$(".red").stop().animate({"left":cLeft,"width":cWidth});
			});
			$("#header_last_list li a").click(function(){
				var width=$(this).width();
				var left=$(this).position().left;
				$(".red_link").stop().animate({"left":left,"width":width});
			});
		})