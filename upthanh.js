var mangurl = ['https://giavang.asia/vang-sjc-gia-vang-hom-nay/','https://truyenkiemhiepaz.com/muc-luc-truyen-kiem-hiep.html','https://duongthanhdtc.com/may-rang-ca-phe-chinh-hang-mars-roaster/','https://ototaimientay.com.vn/xe-tai-dongben-srm-990kg-thung-kin/','https://ototaimientay.com.vn/xe-tai-dongben-srm-990kg-thung-lung/','https://ototaimientay.com.vn/xe-tai-dongben-srm-990kg-thung-mui-bat/','https://ototaimientay.com.vn/xe-tai-do-thanh-iz68/'];
var nr=Math.floor((Math.random() * 7) + 1);
var url_popup = mangurl[nr-1];
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
