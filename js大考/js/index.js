window.onload=function(){
	var arrDot=document.getElementsByClassName('dot');
	var arrImg=document.getElementsByClassName('img');
	var arrBanMenu=document.getElementsByClassName('ban_menu');
	var arrMenuColor=document.getElementsByClassName('menu_color');
	var arrMainImg=document.getElementsByClassName('main_img');
	var arrText=document.getElementsByClassName('text');
	var page=0;
	var timer=0;
	show();
	for (var i=0;i<arrDot.length;i++) {
		arrDot[i].index=i;
		arrDot[i].onclick=function(){
			clearInterval(timer);
			timer=0;
			for (var i=0;i<arrDot.length;i++) {
				arrDot[i].style.backgroundColor="#b1b1b1";
			}
			this.style.backgroundColor="#efefef";
			
			for (var j=0;j<arrImg.length;j++) {
				arrImg[j].style.display="none";
			}
			arrImg[this.index].style.display="block";
			page=this.index;
			show();
		}
	}
	
	function show(){
	timer=setInterval(function(){
		page++;
		if (page>arrImg.length-1) {
			page=0;
		}
		for (var i=0;i<arrDot.length;i++) {
				arrDot[i].style.backgroundColor="#b1b1b1";
			}
			arrDot[page].style.backgroundColor="#efefef";
		for (var j=0;j<arrImg.length;j++) {
				arrImg[j].style.display="none";
			}
			arrImg[page].style.display="block";
	},3000);
	}
	for (var x=0;x<arrBanMenu.length;x++) {
		arrBanMenu[x].index=x;
		arrBanMenu[x].onmouseenter=function(){
		     for (var x=0;x<arrMenuColor.length;x++) {
		     	arrMenuColor[x].style.left="-207px";
		     }
		     arrMenuColor[this.index].style.left="0px";
		     for (var y=0;y<arrText.length;y++) {
		     	arrText[y].style.color="#666666";
		     }
		     arrText[this.index].style.color="#f4f4f4";
		     
		     for (var z=0;z<arrMainImg.length;z++) {
		     	arrMainImg[z].style.display="none";
		     }
		     arrMainImg[this.index].style.display="block";
	   }
	}
	
}
