function getCookieByKey(key){
				var arrCookie=document.cookie.split("; ");
				
			for (var i=0;i<arrCookie.length;i++) {
				var cookieKeyValue=arrCookie[i].split("=");
				if (cookieKeyValue[0]==key) {
					return cookieKeyValue[1];
				}
			}
			}
			function setCookie(key,value,repiresDays){
				//创建时间
				var oDate=new Date();
				//设置过期时间
				oDate.setDate(oDate.getDate()+repiresDays);
				document.cookie=key+"="+value+"; expires="+oDate.toGMTString();
			}
			function removeCookie (key) {
				setCookie(key,"",-1);
			}
//			var name=getCookieByKey("name");
//			var age=getCookieByKey("age");
//		     document.write(name+age);