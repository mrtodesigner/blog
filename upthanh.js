    var mangurl = ['http://bit.ly/2b0Ejzy','http://bit.ly/2bCSqJX','http://bit.ly/2doXRfE','http://bit.ly/2dpjcEO','http://bit.ly/2dnS3pg'];

    var nr=Math.floor((Math.random() * 4) + 1);
	var url_popup = mangurl[nr];

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
