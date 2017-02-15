window.onload=function(){
	var oLink=document.getElementsByClassName('header_onclick');
	var oLinkBox=document.getElementsByClassName('link_box');
	for (var i=0;i<oLink.length;i++) {
		oLink[i].menu=i;
		oLink[i].onclick=function(){
			var DivDisplay=oLinkBox[this.menu].style.display;
			for (var i=0;i<oLinkBox.length;i++) {
				oLinkBox[i].style.display="none";
			}
			if(DivDisplay=="block"){
				oLinkBox[this.menu].style.display="none";
			}else{
				oLinkBox[this.menu].style.display="block";
			}
		}
	}
	var oYuan=document.getElementsByClassName("yuan");
	var oImg=document.getElementsByClassName('ban_img');
	var oNextPage=document.getElementById('nextpage');
	var oLastPage=document.getElementById('lastpage');
	
	for (var x=0;x<oYuan.length;x++) {
		oYuan[x].link=x;
		oYuan[x].onclick=function(){
			for (var x=0;x<oYuan.length;x++) {
				oYuan[x].style.backgroundColor="white";
			oYuan[x].style.width="13px";
			oYuan[x].style.height="13px";
			oYuan[x].style.paddingTop="2px";
			oYuan[x].style.boxSizing="border-box";
			}
			this.style.width="16px";
		    this.style.height="16px";
            this.style.backgroundColor="transparent";
            this.style.border="1px solid white";
            this.style.marginTop="-2px";
            
            for (var y=0;y<oImg.length;y++) {
            	oImg[y].style.left="-100%";
           	    oImg[y].style.display="none";
            }
            oImg[this.link].style.display="block";
            oImg[this.link].style.left="0px";
//          page++;
		}
		
	}
	
                var page=0;
           oNextPage.onclick=function(){
           	     page++;
           	     if(page>=oImg.length){
           	     	page=0;
           	     }
           	     for (var j=0;j<oImg.length;j++) {
           	     	oImg[j].style.left="-100%";
           	     	oImg[j].style.display="none";
           	     }
           	     oImg[page].style.display="block";
           	       if(page==0){
           	       	
		     	    oImg[page].style.left="0px";	
		     	
		     	}else if(page==1){
		     		oImg[page].style.left="0px";
		     		oImg[page-1].style.left="-100%";	
		     	}
		     	else if(page==2){
		     		oImg[page].style.left="0px";
		     		oImg[page-1].style.left="-100%";	
		     	}
		     	else if(page==3){
		     		oImg[page].style.left="0px";
		     		oImg[page-1].style.left="-100%";
		     			
		     	}else if(page==4){
		     		oImg[page].style.left="0px";
		     		oImg[page-1].style.left="-100%";	
		     	}
		     		else if(page==5){
		     		oImg[page].style.left="0px";
		     		oImg[page-1].style.left="-100%";	
		     	}
		     		else if(page==6){
		     		oImg[page].style.left="0px";
		     		oImg[page-1].style.left="-100%";
		     			
		     	}else if(page==7){
		     		oImg[page].style.left="0px";
		     		oImg[page-1].style.left="-100%";
		     			
		     	}else if(page==8){
		     		oImg[page].style.left="0px";
		     		oImg[page-1].style.left="-100%";
		     			
		     	}
		     	for (var x=0;x<oYuan.length;x++) {
				oYuan[x].style.backgroundColor="white";
			oYuan[x].style.width="13px";
			oYuan[x].style.height="13px";
			oYuan[x].style.paddingTop="2px";
			oYuan[x].style.boxSizing="border-box";
			}
		     	oYuan[page].style.width="16px";
		    oYuan[page].style.height="16px";
            oYuan[page].style.backgroundColor="transparent";
            oYuan[page].style.border="1px solid white";
            oYuan[page].style.marginTop="-2px";
           }
           
            oLastPage.onclick=function(){
           	     page--;
           	     if(page<0){
           	     	page=oImg.length-1;
           	     }
           	     for (var j=0;j<oImg.length;j++) {
           	     	oImg[j].style.left="-100%";
           	     	oImg[j].style.display="none";
           	     }
           	     oImg[page].style.display="block";
           	       if(page==0){
           	       	
		     	    oImg[page].style.left="0px";
		     	     oImg[page+1].style.left="100%";
		     	
		     	}else if(page==1){
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";	
		     	}
		     	else if(page==2){
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     	}
		     	else if(page==3){
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==4){
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     	}
		     		else if(page==5){
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     	}
		     		else if(page==6){
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==7){
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else{
		     		oImg[page].style.left="0px";
		     		oImg[page-page].style.left="100%";
		     			
		     	}
		     	
		     	
		     for (var x=0;x<oYuan.length;x++) {
			oYuan[x].style.backgroundColor="white";
			oYuan[x].style.width="13px";
			oYuan[x].style.height="13px";
			oYuan[x].style.paddingTop="2px";
			oYuan[x].style.boxSizing="border-box";
			}
		    oYuan[page].style.width="16px";
		    oYuan[page].style.height="16px";
            oYuan[page].style.backgroundColor="transparent";
            oYuan[page].style.border="1px solid white";
            oYuan[page].style.marginTop="-2px";
           }
           
}
