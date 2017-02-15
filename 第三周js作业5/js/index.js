
function $(id){
	return document.getElementById(id);
}

function lunbo(content,sel){
	var oPrePage=$('previous_page');
	var oNextPage=$('next_page');

	for (var i=0;i<sel.length;i++) {
		sel[i].index=i;
		sel[i].onclick=function(){
			for (var i=0;i<sel.length;i++) {
				sel[i].style.backgroundColor="#6C6C6C";
			}
			this.style.backgroundColor="#ffffff";
//			arrStrip3[this.index].style.backgroundColor="#151515";
			for (var j=0;j<content.length;j++) {
				content[j].style.left="-1200px";
				content[j].style.display="none";
			}
			content[this.index].style.transition="all 1s";
			content[this.index].style.display="block";
			if (this.index==0) {
				content[this.index].style.left="0px";
				content[this.index+1].style.left="1200px";
				content[this.index+2].style.left="2400px";
			}else if (this.index==1) {
				content[this.index].style.left="0px";
				content[this.index-1].style.left="-1200px";
				content[this.index+1].style.left="1200px";
			}else if (this.index==2){
				content[this.index].style.left="0px";
				content[this.index-1].style.left="-1200px";
				content[this.index-2].style.left="-2400px";
			}
			
		}
	}
	            var page=0;
	            oNextPage.onclick=function(){
	            	page++;
	            	if (page>=content.length) {
	            		page=0;
	            	}
	            	for (var i=0;i<content.length;i++) {
	            		content[i].style.left="-1200px";
	            		content[i].style.display="none";
	            	}
	            	content[page].style.transition="all 1s";
	            	content[page].style.display="block";
	            	if (page==0) {
				content[page].style.left="0px";
				content[page+1].style.left="1200px";
				content[page+2].style.left="2400px";
			}else if (page==1) {
				content[page].style.left="0px";
				content[page-1].style.left="-1200px";
				content[page+1].style.left="1200px";
			}else if (page==2){
				content[page].style.left="0px";
				content[page-1].style.left="-1200px";
				content[page-2].style.left="-2400px";
			}
			
			for (var a=0;a<sel.length;a++) {
				sel[a].style.backgroundColor="#6C6C6C";
			}
			    sel[page].style.backgroundColor="#ffffff";
//			    arrStrip3[page].style.backgroundColor="#151515";
	            }
	            
	            oPrePage.onclick=function(){
	            	page--;
	            	if (page<0) {
	            		page=content.length-1;
	            	}
	            		for (var i=0;i<content.length;i++) {
	            		content[i].style.left="1200px";
	            		content[i].style.display="none";
	            	}
	            		content[page].style.transition="all 1s";
	            		content[page].style.display="block";
	            	if (page==0) {
				content[page].style.left="0px";
				content[page+1].style.left="1200px";
				content[page+2].style.left="2400px";
			}else if (page==1) {
				content[page].style.left="0px";
				content[page-1].style.left="-1200px";
				content[page+1].style.left="1200px";
			}else if (page==2){
				content[page].style.left="0px";
				content[page-1].style.left="-1200px";
				content[page-2].style.left="-2400px";
			}
			
			for (var a=0;a<sel.length;a++) {
				sel[a].style.backgroundColor="#6C6C6C";
			}
			    sel[page].style.backgroundColor="#ffffff";
			   
	       }
	            

}
window.onload=function(){
	
	
	var oSearch=$('search');
	var oUl=$('ul');
	var oUl2=$('music_type_select');
	var arrSpan=oUl2.getElementsByTagName('span');
	var arrMusics=document.getElementsByClassName('musics');
	var oSripSelect=$('strip_select');
	var arrStrip=oSripSelect.getElementsByClassName('strip');
	var arrHSS=document.getElementsByClassName('hit_song_sheet');
	var oSripSelect3=$('strip_select3');
	var arrStrip3=oSripSelect3.getElementsByClassName('strip');
	var oMV=$('MV_first_show_menu');
	var arrLi=oMV.getElementsByTagName('li');
	var arrMVContent=document.getElementsByClassName('show_content');
	
	lunbo(arrMusics,arrStrip);
	lunbo(arrHSS,arrStrip3);
	oSearch.onfocus=function(){
		oUl.style.display="block";
	}
	oSearch.onblur=function(){
		oUl.style.display="none";
	}
	for (var n=0;n<arrSpan.length;n++) {
		arrSpan[n].color=n;
		arrSpan[n].onclick=function(){
		for (var n=0;n<arrSpan.length;n++) {
			arrSpan[n].style.color="#909090";
		}
		arrSpan[this.color].style.color="#ffffff";
	}
	
	}
	
//	for (var i=0;i<arrStrip.length;i++) {
//		arrStrip[i].index=i;
//		arrStrip[i].onclick=function(){
//			for (var i=0;i<arrStrip.length;i++) {
//				arrStrip[i].style.backgroundColor="#6C6C6C";
//			}
//			this.style.backgroundColor="#ffffff";
//			for (var j=0;j<arrMusics.length;j++) {
//				arrMusics[j].style.left="-1200px";
//			}
//			arrMusics[this.index].style.transition="all 1s";
//			arrMusics[this.index].style.display="block";
//			if (this.index==0) {
//				arrMusics[this.index].style.left="0px";
//				arrMusics[this.index+1].style.left="1200px";
//				arrMusics[this.index+2].style.left="2400px";
//			}else if (this.index==1) {
//				arrMusics[this.index].style.left="0px";
//				arrMusics[this.index-1].style.left="-1200px";
//				arrMusics[this.index+1].style.left="1200px";
//			}else if (this.index==2){
//				arrMusics[this.index].style.left="0px";
//				arrMusics[this.index-1].style.left="-1200px";
//				arrMusics[this.index-2].style.left="-2400px";
//			}
//			
//		}
//	}
//	            var page=0;
//	            oNextPage.onclick=function(){
//	            	page++;
//	            	if (page>=arrMusics.length) {
//	            		page=0;
//	            	}
//	            	for (var i=0;i<arrMusics.length;i++) {
//	            		arrMusics[i].style.left="-1200px";
//	            	}
//	            	arrMusics[page].style.transition="all 1s";
//	            	arrMusics[page].style.display="block";
//	            	if (page==0) {
//				arrMusics[page].style.left="0px";
//				arrMusics[page+1].style.left="1200px";
//				arrMusics[page+2].style.left="1200px";
//			}else if (page==1) {
//				arrMusics[page].style.left="0px";
//				arrMusics[page-1].style.left="-1200px";
//				arrMusics[page+1].style.left="1200px";
//			}else if (page==2){
//				arrMusics[page].style.left="0px";
//				arrMusics[page-1].style.left="-1200px";
//				arrMusics[page-2].style.left="-1200px";
//			}
//			
//			for (var a=0;a<arrStrip.length;a++) {
//				arrStrip[a].style.backgroundColor="#6C6C6C";
//			}
//			    arrStrip[page].style.backgroundColor="#ffffff";
//	            }
//	            
//	            oPrePage.onclick=function(){
//	            	page--;
//	            	if (page<0) {
//	            		page=arrMusics.length-1;
//	            	}
//	            		for (var i=0;i<arrMusics.length;i++) {
//	            		arrMusics[i].style.left="1200px";
//	            	}
//	            		arrMusics[page].style.transition="all 1s";
//	            		arrMusics[page].style.display="block";
//	            	if (page==0) {
//				arrMusics[page].style.left="0px";
//				arrMusics[page+1].style.left="1200px";
//				arrMusics[page+2].style.left="1200px";
//			}else if (page==1) {
//				arrMusics[page].style.left="0px";
//				arrMusics[page-1].style.left="-1200px";
//				arrMusics[page+1].style.left="1200px";
//			}else if (page==2){
//				arrMusics[page].style.left="0px";
//				arrMusics[page-1].style.left="-1200px";
//				arrMusics[page-2].style.left="-1200px";
//			}
//			
//			for (var a=0;a<arrStrip.length;a++) {
//				arrStrip[a].style.backgroundColor="#6C6C6C";
//			}
//			    arrStrip[page].style.backgroundColor="#ffffff";
//	       }
	     
        for (var x=0;x<arrLi.length;x++) {
        	arrLi[x].index=x;
        	arrLi[x].onclick=function(){
        		for (x=0;x<arrLi.length;x++) {
        			arrLi[x].style.color="#8e8e8e";
        		}
        		this.style.color="#353535";
        		
        		for (var y=0;y<arrMVContent.length;y++) {
        			arrMVContent[y].style.display="none";
        		}
        		arrMVContent[this.index].style.display="block";
        	}
        } 
	
}
