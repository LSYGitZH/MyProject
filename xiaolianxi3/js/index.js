window.onload =function(){
	window.onload=function(){
		document.getElementsByClassName('heand')[0].innerHTML=document.body.scrollTop;
		if(document.body.scrollTop>500){
			document.getElementsByClassName('heand')[0].classList.add('heand2');
		}
	}
}
