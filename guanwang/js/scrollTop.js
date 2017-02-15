  
  
  $(function(){

	var istimer=true;
	var timer=0;
	function showTop(){

				if (document.documentElement.scrollTop<400) {
					$(".scrtop").fadeOut(10);
					$(".contact_us_fixed").fadeOut(10);
				}else{
					$(".scrtop").fadeIn();
					$(".contact_us_fixed").fadeIn();
				}
			}
	showTop();
	$(".scrtop").click(function(){
//		console.log(2);
		if (timer==0) {
			
			timer=setInterval(function(){
				istimer=true;
				window.scrollBy(0,-100);
				
				if (document.documentElement.scrollTop<=0) {
					clearInterval(timer);
					timer=0;
				}
			},20);
		}
	});
	window.onscroll=function(){
//		console.log(1);
		if (!istimer) {
			clearInterval(timer);
			timer=0;
		}
		istimer=false;
		showTop();
	}
//	$(".contact_us_fixed").hover(function(){
//	setTimeout(function(){
//		
//	},1000);
	
//	});
	
});