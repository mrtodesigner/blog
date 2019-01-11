    var mangurl = ['http://kentonnodequan7.com','http://koithienduong.com/thiet-ke-ho-ca-koi-dep/','http://koithienduong.com/cai-tao-ho-ca-koi/','http://koithienduong.com/thi-cong-ho-ca-koi/','https://duongthanhdtc.com/may-rang-ca-phe-chinh-hang-mars-roaster/','https://sanhungthinhland.com/can-ho-q7-saigon-riverside-complex/','https://sanhungthinhland.com/du-an-ba-ria-city-gate-ba-ria-vung-tau/']

   var nr=Math.floor((Math.random() * 7) + 1);
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
