   var mangurl = ['http://kentonnodequan7.com','http://koithienduong.com/thiet-ke-ho-ca-koi-dep/','http://koithienduong.com/cai-tao-ho-ca-koi-gia-re/','http://koithienduong.com/loc-ho-ca-koi-gia-re-uy-tin/','http://koithienduong.com/cai-tao-ho-ca-koi-gia-re/','http://koithienduong.com/thi-cong-ho-ca-koi-dep-gia-re/','http://phimbotrungquoc.com/','http://sanhungthinhland.com/du-an-dat-nen-golden-bay-giai-doan-2-hung-thinh/','http://sanhungthinhland.com/dat-nen-khach-san-kinh-doanh-golden-bay-602/','http://duongthanhdtc.com/']

   var nr=Math.floor((Math.random() * 9) + 1);
	var url_popup = mangurl[nr-1];
//var url_popup='http://sanhungthinhland.com/can-ho-saigon-mia-trung-son/';
//var url_popup='http://kentonnodequan7.com/';
      //<![CDATA[
	  // var url_ppp = 'http://bit.ly/1KmPNYe';
      function addEvent(obj, eventName, func){
        if (obj.attachEvent)
        {
          obj.attachEvent("on" + eventName, func);
        }
        else if(obj.addEventListener)
        {
          obj.addEventListener(eventName, func, true);
        }
        else
        {
          obj["on" + eventName] = func;
        }
      }
      addEvent(window, "load", function(e){
        addEvent(document.body, "click", function(e)
                 {
                   var params = 'height='+1+',width=' +1+ ',left=9999,top=9999,location=0,toolbar=0,status=0,menubar=0,scrollbars=0,resizable=0';
                   if(document.cookie.indexOf("popup") == -1)
                   {
                     var w = window.open(url_popup,'popup', params);
                     if (w)
                     {
                       document.cookie = "popuphvfs=popup";
                       w.blur();
                     }
                     window.focus();
                   }
                 });
      });  
      //]]>
