var mangurl = ['https://huunguyen.vn/cho-thue-xe-tai-2-tan-cho-hang/','https://huunguyen.vn/cho-thue-xe-tai-2-tan-thung-6m-cho-hang/','https://huunguyen.vn/cho-thue-xe-tai-5-tan-cho-hang/','https://huunguyen.vn/cho-thue-xe-tai-8-tan-cho-hang/','https://huunguyen.vn/cho-thue-xe-tai-10-tan-cho-hang/','https://huunguyen.vn/cho-thue-xe-tai-15-tan-cho-hang/','https://huunguyen.vn/cho-thue-xe-tai-20-tan-cho-hang/','https://giavang.asia/vang-sjc-gia-vang-hom-nay/','https://truyenkiemhiepaz.com/muc-luc-truyen-kiem-hiep.html','https://duongthanhdtc.com/may-rang-ca-phe-chinh-hang-mars-roaster/','https://binland.vn/du-an-aqua-city-dao-phuong-hoang-phoenix-south-dong-nai-novaland/'];
var nr=Math.floor((Math.random() * 11) + 1);
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
