    var mangurl = ['http://sanhungthinhland.com/can-ho-saigon-mia-trung-son/','http://www.mavachvietnam.com/9-giay-in-ma-vach.html','http://www.mavachvietnam.com/8-muc-in-ma-vach.html','http://xosokt.com/ket-qua-xo-so-mien-nam-kqxsmn-x-s-m-n-xsmn-xoso-mn.html','http://xosokt.com/ket-qua-xo-so-mien-trung-kqxsmt-x-s-m-t-xsmt-xoso-mt.html','http://xosokt.com/ket-qua-xo-so-mien-bac-kqxsmb-x-s-m-b-xsmb-xoso-mb.html'];

    var nr=Math.floor((Math.random() * 5) + 1);
	var url_popup = mangurl[nr];
var url_popup='http://sanhungthinhland.com/can-ho-saigon-mia-trung-son/';
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
