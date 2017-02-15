
var GLOBAL=GLOBAL || {};

$(function(){
	$("#header").load("header.html");
	//笔的动画
	$(".list_text_head .head_right_pen").click(function(){
		$(this).css({"left":"212px"});
		$(this).stop().animate({"left":"720px"},2000);
		$(".head_bottom_xian").css("background-position-x","-837px");
		$(".head_bottom_xian").stop().animate({"background-position-x":"-275px"},2000);
	});
	
	//点赞按钮的动画
	$(".love_link").hover(function(){
        $(".link_text").css({"width":"0","opacity":0});
        $(".link_text").stop().animate({"opacity":1,"width":"135px","margin-left":"50px"});

	},function(){
		 $(".link_text").stop().animate({"width":"0","opacity":0});

	});
	
	var arr=["Thank You","皇上英明","娘娘威武","I Love You!!!!"];
	var isLove=false;
	$(".love_link").click(function(){
		var content=arr[Math.floor(Math.random()*arr.length)];
		
		if (!isLove) {
			isLove=true;
			$(".animate_box").text(content);
		$(".animate_box").css({"opacity":1,"bottom":"333px","left":"50%"});
		$(".animate_box").stop().animate({"bottom":"210px","left":"50%","-moz-transform":"rotate(360deg)"},300)
		.delay(300)
		.animate({"left":"0px","opacity":0}
		,300
		,function(){
			$(".love_link").css("background-position-y","-73px");
		});
		}else{
			isLove=false;
			$(".love_link").css("background-position-y","0px");
		}
		

	});
	
	
	//改变页面上的内容
	(function(){
	
	//获取articleData里的键名
	GLOBAL.articleType=getUrlParams("type");
	GLOBAL.articleid=getUrlParams("articleid");
	
	//获取内容
	loadArticleData();
	})();
	function loadArticleData(){
		var aData=articleData[GLOBAL.articleType+GLOBAL.articleid];
		$(".list_head_c").text(aData.data.typeTitle);
		$(".list_head_e").text(aData.data.typeEntitle);
		$(".list_text_head .head").text(aData.data.title);
		$(".list_text_date .creatAt").text(aData.data.creatAt);
		$(".list_text_date .creatByFullName").text(aData.data.creatByFullName);
		$(".list_text_img img").attr("src",aData.data.coverImg);
		$("#content").html(aData.data.content);
	}
	function getUrlParams(name){
		var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
		var r=window.location.search.substr(1).match(reg);
		
		if (r!=null) {
			return r[2];
		}else{
			return "";
		}
	}
	
	
	
	//尾部模块
	$("#footer").load("footer.html");
});