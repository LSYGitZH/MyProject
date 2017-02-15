$(function(){
				$("#fullpage").fullpage({
					slidesColor:["tranparent","#cfcfcf","tranparent","#e6ebe7","#cfcfcf","tranparent"],
					anchors:["page1","page2","page3","page4","page5","page6"],
//					menu:"#menu",
					navigation:true,
//                  afterRender:function(anchorLink,index,slideIndex,direction){
//                  	$(".section").eq(index).find(".p1").animate({"left":0},500);
//                  },
					afterLoad:function(anchorLink,index){
						$(".section").eq(1).find(".page2_text").animate({"top":0},500);
						$(".box1").animate({"left":0},500);
						$(".box2").animate({"right":0},500);
						$("#contact_us").find("li").animate({"opacity":1},1000);
					},
					onLeave:function(index,nextIndex,direction){
						$(".section").eq(1).find(".page2_text").animate({"top":"100px"},500);
						$(".box1").animate({"left":"-100%"},500);
						$(".box2").animate({"right":"-100%"},500);
						$("#contact_us").find("li").animate({"opacity":0},1000);
					},
//					afterSlideLoad:function(anchorLink,index,slideIndex,direction){
//						$(".s").eq(slideIndex).find(".p2").delay(100).animate({"left":0},500);
//					},
//					onSlideLeave:function(anchorLink,index,slideIndex,direction){
//						$(".s").eq(slideIndex).find(".p2").delay(100).animate({"left":"-100%"},500);
//					}
				});
			});