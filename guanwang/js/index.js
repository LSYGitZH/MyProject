//
//window.onload=function(){
//	//获取header代码
//	var oHeader=document.getElementById('header');
//	var xhr;
//	if (window.XMLHttpRequest) {
//		xhr=new XMLHttpRequest;
//	}else{
//		xhr=ActiveXObject("Microsoft.XMLHTTP");
//	}
//	
//	xhr.open("get","header.html",true);
//	xhr.send();
//	xhr.onreadystatechange=function(){
//		if (xhr.readyState==4) {
//			if (xhr.status==200) {
//				oHeader.innerHTML=xhr.responseText;
//			}
//		}
//	}
//}
var GLOBAL=GLOBAL || {};
$(function() {

	//头部模块
	(function() {
		$("#header").load("header.html");
	})();

	//轮播图模块
	(function() {
		var page = 0;
		$(".select_box .select .select_dots").click(function() {
			var index = $(this).index();
			page = index;
			show1();
		});

		$(".select_box #next").click(function() {
			page++;
			if(page >= $(".one_banner_show .show").size()) {
				page = 0;
			}
			show1();
		});

		$(".select_box #prev").click(function() {
			page--;
			if(page < 0) {
				page = $(".one_banner_show .show").size() - 1;
			}
			show1();
		});

		show1();

		function show1() {
			$(".select .select_dots").eq(page).removeClass("color1");
			$(".select .select_dots").eq(page).addClass("color2");

			$(".select .select_dots").eq(page).siblings(".select_dots").removeClass("color2")
			$(".select .select_dots").eq(page).siblings(".select_dots").addClass("color1");
			$(".one_banner_show .show").eq(page).css("display", "block").siblings().css("display", "none");

			imgAnimate();

			function imgAnimate() {
				var arrImg = $(".one_banner_show .show").eq(page).find("div");
				arrImg.eq(0).addClass("animated fadeInRight");
				arrImg.eq(1).addClass("animated fadeInRight");
				arrImg.eq(2).addClass("animated fadeInRight");
			}

		}
	})();

	//主要产品模块
    (function() {

		var page2 = 0;
		var arrRightText = $(".two_banner_show .content .right_text_box");
		var arrConImg = $(".two_banner_show .content .content_img");
		var arrConLPng = $(".two_banner_show .content .right_text_box .text_content .left_png");
		var arrConTextdd = $(".two_banner_show .content .right_text_box .text_content dd");
		var arrConRightP = $(".two_banner_show .content .right_text_box .present_text");
		var arrSelect = $(".two_banner_box .left_select>.select1");

		arrSelect.click(function() {
             page2 = $(this).index();
			 show2();
			if(page2 > $(this).index()) {
				arrConImg.removeClass("animated fadeInRight").addClass("animated bounceInLeft");
				arrConLPng.removeClass("animated fadeInLeft").addClass("animated fadeInRight");
				arrConTextdd.removeClass("animated fadeInRight").addClass("animated bounceInLeft");
				arrConRightP.removeClass("animated fadeInRight").addClass("animated bounceInLeft");
			} else {
				arrConImg.removeClass("animated bounceInLeft").addClass("animated fadeInRight");
				arrConLPng.removeClass("animated fadeInRight").addClass("animated fadeInLeft");
				arrConTextdd.removeClass("animated bounceInLeft").addClass("animated fadeInRight");
				arrConRightP.removeClass("animated bounceInLeft").addClass("animated fadeInRight");
			}

		});

		
        $(".link_box #two_next").click(function() {
				page2++;
				if(page2 >= $(".two_banner_show .content").size()) {
					page2 = 0;
				}
				show2();
				arrConImg.removeClass("animated bounceInLeft").addClass("animated fadeInRight");
				arrConLPng.removeClass("animated fadeInRight").addClass("animated fadeInLeft");
				arrConTextdd.removeClass("animated bounceInLeft").addClass("animated fadeInRight");
				arrConRightP.removeClass("animated bounceInLeft").addClass("animated fadeInRight");
                   
			});
			$(".link_box #two_prev").click(function() {
				page2--;
				if(page2 < 0) {
					page2 = $(".two_banner_show .content").size() - 1;
				}
                    show2();
				arrConImg.removeClass("animated fadeInRight").addClass("animated bounceInLeft");
				arrConLPng.removeClass("animated fadeInLeft").addClass("animated fadeInRight");
				arrConTextdd.removeClass("animated fadeInRight").addClass("animated bounceInLeft");
				arrConRightP.removeClass("animated fadeInRight").addClass("animated bounceInLeft");
		
			});
			
		function show2() {
			arrSelect.eq(page2).addClass("select2")
			arrSelect.eq(page2).siblings().removeClass("select2");
			$(".two_banner_show .content").hide().eq(page2).show();
	
		}
	})();

	//业务范围模块
	(function() {
		var arrBusiness = $(".business_box");
		var arrBtn = $(".business_box .note_btn");
		$(".business_box .note_btn").click(function() {
			var index=$(this).index(".business_box .note_btn");
			if ($(".business_note").eq(index).css("display")=="none") {
				$(".business_box .note_btn").removeClass("note_btn2").eq(index).addClass("note_btn2");
				$(".business_note").slideUp(500).eq(index).slideDown(500);
			}else{
				$(".business_box .note_btn").eq(index).removeClass("note_btn2");
				$(".business_note").eq(index).slideUp(500);
			}
		});
		
	})();

    //团队介绍模块
    (function(){
    	var page3 = 0;
		$(".round_box span").click(function() {
			var index = $(this).index();
			page3 = index;
			show3();
		});

		$(".our_team_select_box .three_next").click(function() {
			page3++;
			if(page3 >= $(".round_box span").size()) {
				page3 = 0;
			}
			show3();
		});

		$(".our_team_select_box .three_prev").click(function() {
			page3--;
			if(page3 < 0) {
				page3 = $(".round_box span").size() - 1;
			}
			show3();
		});


		function show3() {
			$(".round_box span").eq(page3).removeClass("round_gray");
			$(".round_box span").eq(page3).addClass("round_blue");

			$(".round_box span").eq(page3).siblings().removeClass("round_blue")
			$(".round_box span").eq(page3).siblings().addClass("round_gray");
			$(".team_content_box").stop(true,true).animate({"left":page3*-1100+"px"},1000);
              
		}
    })();
    
    //返回顶部模块
	(function() {
		$("#scroll_top").load("scrollTop.html");
	})();

	//尾部模块
	(function() {
		$("#footer").load("footer.html");
	})();
	
	
	
});