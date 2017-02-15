
$(function(){
	var oPrev=$(".prev");
	var oNext=$(".next");
	var oUl=$(".header_bottom_menu");
	var arrLi=$(".header_bottom_menu>li");
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
		page=$(this).index();
		show();
	})
	
	function show(){
		arrLi.removeClass("color").eq(page).addClass("color");
		if (page==0) {
			oUl.animate({"left":0});
		}else if (page==arrLi.length-1 || page==arrLi.length-2 || page==arrLi.length-3 || page==arrLi.length-4 || page==arrLi.length-5 ) {
			var Left=arrLi.length-4*132;
			oUl.stop(true,true).animate({"left":Left});
		}else{
			var Left=(page-1)*-132;
			oUl.stop(true,true).animate({"left":Left});
		}
		
		if (page>0) {
			oPrev.removeClass("color2");
		}else{
			oPrev.addClass("color2");
		}
		
		if (page>=arrLi.length-1) {
			oNext.addClass("color2");
		}else{
			oNext.removeClass("color2");
		}
	}
});