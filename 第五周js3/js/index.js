//window.onload=function(){
	
	$(function(){
		
	var oList=$("#menu_box>li");
	oList.hover(function(){
		$(this).find(" ul").stop().slideToggle();
	});
	
	var page=0;
	var oLinkO=$(".link_o");
	oLinkO.mouseenter(function(){
		$(this).css({"padding":"3px","margin-top":"-3px"}).siblings().css({"padding":"0px","margin-top":"0px"});
		$(this).find("div").css("background-color","#ebaf11");
		$(this).siblings().find("div").css("background-color","#0c2136");
		
		$(".content").stop(true,true).eq($(this).index()).fadeIn(500).siblings().fadeOut(500);
	});
	

	var oNext=$("#next_page");
	var oBanner=$(".banner_img_box");		
			oNext.click(function(){
				page++;
				if (page<oBanner.find("img").size()-1) {
					oBanner.animate({"left":page*-100+"%"})
				}else{
					page=0;
					oBanner.stop(true,true).animate({"left":(oBanner.find("img").size()-1)*-100+"%"},function(){
						oBanner.css("left","-100%");
					})
				}
			});
			var oPrev=$("#prev_page");
			oPrev.click(function(){
				page--;
				if (page>0) {
					oBanner.stop(true,true).animate({"left":page*-100+"%"});
				}else{
					page=oBanner.find("img").size()-1;
					oBanner.stop(true,true).animate({"left":"0px"},function(){
						oBanner.css("left",(oBanner.find("img").size()-2)*-100+"%")
					})
					
				}
			})
});




//var arrBannerImg=document.getElementsByClassName('banner_img');
//var oPrevPage=document.getElementById('prev_page');
//var oNextPage=document.getElementById('next_page');
//var page=0;
//oNextPage.onclick=function(){
//	page++;
//	if (page>=arrBannerImg.length) {
//		page=0;
//	}
//	for (var i=0;i<arrBannerImg.length;i++) {
//		arrBannerImg[i].style.display="none";
//	}
//	arrBannerImg[page].style.display="block";
//}
//
//    var oLunBoContent=document.getElementsByClassName('lunbo_content');
//    var arrContent=document.getElementsByClassName('content');
//    var oLinkO=document.getElementsByClassName('link_o');
//    var oLinkI=document.getElementsByClassName('link_i');
//    
//    
//    for (var i=0;i<oLinkO.length;i++) {
//       oLinkO[i].index=i;
//    oLinkO[i].onmouseenter=function(){
//    	for (var i=0;i<oLinkO.length;i++) {
//    		oLinkO[i].style.padding="0px";
//    		oLinkO[i].style.marginTop="0px";
//    		oLinkI[i].style.backgroundColor="#0c2136";
//    	}
//    	this.style.padding="3px";
//    	this.style.marginTop="-3px";
//    	oLinkI[this.index].style.backgroundColor="#ebaf11";
//    	
//    		var a=oLunBoContent.style.left;
//           a=this.index*-1200+"px";
//    }
//    }
//}
