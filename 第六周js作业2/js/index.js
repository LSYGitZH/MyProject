
$(function(){
	var oPrev=$(".prev");
	var oNext=$(".next");
	var oUl=$(".select_menu_box");
	var arrLi=$(".select_box");
	var page=0;
	oNext.click(function(){
		if (page<arrLi.size()-1) {
			page++;
		}
		show();
	});
	oPrev.click(function(){
		if (page>0) {
			page--;
		}
		show();
	});
	arrLi.click(function(){
		show();
		page=$(this).index();
		
	});
	
	function show(){
		arrLi.find(".img_box").removeClass("move");
		arrLi.eq(page).find(".img_box").addClass("move");
		
		if (page==0) {
			oUl.animate({"left":0});
		}else if (page==arrLi.length-1) {
			var Left=arrLi.length-2*269;
			oUl.stop(true,true).animate({"left":Left});
		}else{
			var Left=(page-1)*-269;
			oUl.stop(true,true).animate({"left":Left});
		}
		
		//淡入淡出效果
		$(".banner_img_box>.img").fadeOut(10).eq(page).fadeIn(10);
		
		if (page>0) {
			oPrev.css("border-right"," 18px solid #dcb25e");
		}else{
			oPrev.css("border-right"," 18px solid #7b6227");
		}
		
		if (page>=arrLi.length-1) {
			oNext.css("border-left","18px solid #7b6227");
		}else{
			oNext.css("border-left","18px solid #dcb25e");
		}
	}
	
	
});