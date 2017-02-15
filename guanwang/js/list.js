
var GLOBAL=GLOBAL || {};

$(function(){
	//头部模块
	$("#header").load("header.html");
	
	//笔的动画
	$(".head_right_pen").click(function(){
		$(this).css({"left":"70px"});
		$(this).stop().animate({"left":"1049px"},2000);
		$(".head_bottom_xian").css("background-position-x","-979px");
		$(".head_bottom_xian").stop().animate({"background-position-x":"0"},2000);
	});
	
	
	var pageTimes=0;
	$(".list_text_content").html("");
	loadListData();
	$(".list_content_bottom_link").click(function(){
		pageTimes++;
		loadListData();
	});
	function loadListData(){
		var list=listData["listData0"+pageTimes];
		if (!list || !list.data.list.length) {
			return;
		}
		if (list.success=="成功") {
			var data=list.data;
			var arrList=data.list;
			for (var i=0;i<arrList.length;i++) {
				var itemHtml=$("#itemHtml").html();
				itemHtml=itemHtml.replace("$articleId$",arrList[i].sysId)
                  .replace("$articleCover$",arrList[i].coverImg)
                  .replace("$articleTitle$",arrList[i].title)
                  .replace("$updataTime$",arrList[i].creatAt)
                  .replace("$discribe$",arrList[i].describe);
                  
                  $(".list_text_content").append(itemHtml);
			}
			var count=data.count;
			var pageSize=data.pageSize;
			var pageStart=data.pageStart;
			//所有数据都加载了
			if (Math.floor(count/pageSize)==pageStart) {
				$(".list_content_bottom_link").css("opacity","0.3");
				$(".list_content_bottom_img").addClass("list_content_bottom_img2");
			}else{
				
			}
		}
	}
	//点击列表页面的选项时，跳到article.html页面
	$(".list_text_content").delegate(".text_box","click",function(){
		window.open("article.html?type=xiaoniaoNews&articleid="+$(this).attr("articleid"),"_blank");
	});
	
		
		//尾部模块
	$("#footer").load("footer.html");
});

//window.onload=function(){
//	var oArticleList=document.getElementsByClassName('')
//}
