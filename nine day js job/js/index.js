window.onload=function(){
	
	var oBanner=document.getElementById('banner');
	var oNextPage=document.getElementById('nextpage');
	var oLastPage=document.getElementById('lastpage');
	var oImg=oBanner.getElementsByTagName('img');
	var oYuan=document.getElementsByClassName('yuan');
	
	       for (var i=0;i<oYuan.length;i++) {
	       	        oYuan[i].index=i;
	       	        oYuan[i].onclick=function(){
	       	        	for (var i=0;i<oYuan.length;i++) {
	       	        		oYuan[i].style.backgroundColor="transparent";
	       	        		oYuan[i].style.borderColor="#A1A3A5";
	       	        	}
	       	        	this.style.backgroundColor="#ffffff";
	       	        	this.style.borderColor="#ffffff";
	       	        	
	       	        	for (var j=0;j<oImg.length;j++) {
	       	        		oImg[j].style.left="-100%";
	       	        		
	       	        	}
	       	        	oImg[this.index].style.left="0px";
	       	        }
	       	
	       }
	       
	       var page=0;
	       
	       var next=function(){
	       	   page++;
	       	   if (page>=oImg.length) {
	       	   	page=0;
	       	   }
	       	   
	       	   for (var i=0;i<oImg.length;i++) {
	       	   	    oImg[i].style.left="-100%";
	       	   }
//	       	   oImg[page].style.left="0";


                      for (var i=0;i<oYuan.length;i++) {
	       	        		oYuan[i].style.backgroundColor="transparent";
	       	        		oYuan[i].style.borderColor="#A1A3A5";
	       	        	}
	       	        	oYuan[page].style.backgroundColor="#ffffff";
	       	        	oYuan[page].style.borderColor="#ffffff";

	       	    if(page==0){
		     	oImg[page].style.left="0px";	
		     	oImg[page+1].style.left="100%";
		     
		     	}else if(page==1){
		     
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==2){
		  
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==3){
		     		
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==4){
		     	
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==5){
		     	
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==6){
		     		
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==7){
		     		
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==8){
		     		
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else{
		     		
		     		oImg[page-1].style.left="-100%";
		     		oImg[page].style.left="0px";	
		     	}
	       }
	        oNextPage.onclick=next;
	       var timer = setInterval(next,4000);
	       oBanner.onmouseover=function(){
	       	clearInterval(timer);
	       	timer=0;
	       }
	       oBanner.onmouseout=function(){
	       	if (timer==0) {
	       		timer=setInterval(next,4000);
	       	}
	       }
	       
	       oLastPage.onclick=function(){
	       	   page--;
	       	   if (page<0) {
	       	   	page=oImg.length-1;
	       	   }
	       	   
	       	   for (var i=0;i<oImg.length;i++) {
	       	   	    oImg[i].style.left="100%";
	       	   }
//	       	   	       	   oImg[page].style.left="0";
	       	   
	       	   
	       	    for (var i=0;i<oYuan.length;i++) {
	       	        		oYuan[i].style.backgroundColor="transparent";
	       	        		oYuan[i].style.borderColor="#A1A3A5";
	       	        	}
	       	        	oYuan[page].style.backgroundColor="#ffffff";
	       	        	oYuan[page].style.borderColor="#ffffff";

	       	   
	       	  	       	    if(page==0){
		     	oImg[page].style.left="0px";	
		     	oImg[page+1].style.left="100%";
		     	
		     	}else if(page==1){
		     	
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==2){
		  
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==3){
		     
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==4){
		 
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==5){

		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==6){
		
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==7){
		
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else if(page==8){
		  
		     		oImg[page].style.left="0px";
		     		oImg[page+1].style.left="100%";
		     			
		     	}else{
		    
		     		oImg[page+1].style.left="100%";
		     		oImg[page].style.left="0px";	
		     	}
	       }
}
  