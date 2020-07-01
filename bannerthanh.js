thanh2=jQuery.noConflict();
(function(thanh2) {
    thanh2.fn.linhnguyen = function(options) {        
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-linhnguyen-modal' //the class of a button or element that will close an open modal
    	}; 

        var options = thanh2.extend({}, defaults, options); 
	
        return this.each(function() {
        	var modal = thanh2(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = thanh2('.linhnguyen-modal-bg');

			if(modalBG.length == 0) {
				modalBG = thanh2('<div class="linhnguyen-modal-bg" />').insertAfter(modal);
			}		    
			modal.bind('linhnguyen:open', function () {
			  modalBG.unbind('click.modalEvent');
				thanh2('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': thanh2(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": thanh2(document).scrollTop()+topMeasure + 'px',
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': thanh2(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':thanh2(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}
				}
				modal.unbind('linhnguyen:open');
			}); 	

			modal.bind('linhnguyen:close', function () {
			  if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  thanh2(document).scrollTop()-topOffset + 'px',
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}		
				}
				modal.unbind('linhnguyen:close');
			});     
   	
    	modal.trigger('linhnguyen:open')
			
			//Close Modal Listeners
			var closeButton = thanh2('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('linhnguyen:close')
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('linhnguyen:close')
				});
			}
			thanh2('body').keyup(function(e) {
        		if(e.which===27){ modal.trigger('linhnguyen:close'); } // 27 is the keycode for the Escape key
			});
			
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call
})(jQuery);
        
thanh2(window).load(function() {
		if(document.cookie.indexOf("adf") == -1)
		{
			document.cookie = "adfpopunder1=adf";
			var divpopup = document.createElement("div");
			thanh2(divpopup).attr('id', 'myModal');
			thanh2(divpopup).attr('class', 'linhnguyen-modal');
			thanh2( "body" ).append(divpopup);
			thanh2("#myModal").html("<a href='https://ototaimientay.com.vn/xe-tai-do-thanh-iz200-1t9/' target='_blank'><img src='https://ototaimientay.com.vn/wp-content/uploads/2020/06/xe-tai-do-thanh-iz200-1t9-hinh-anh.jpg' width='480px'/></a>");
			thanh2('#myModal').linhnguyen(thanh2('#myModal').data());
		}
}); 
/*eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8.n=6(0){0=(0||a.0);5(0.d===g){7 4}};8.o=6(0){0=(0||a.0);5(0.d===g){7 4}};8.i=6(0){0=(0||a.0);5(0.d===g){7 4}};6 b(){7 4};6 q(e){f h=(j)?e:0;f c=(j)?h.1:h.m;5((c===2)||(c===3))7 4};8.x=b;8.y=b;f 9=4;a.r=6(e){5(e.1===k)9=4};a.i=6(e){5(e.1===k)9=l;5(((e.1===z)||(e.1===w)||(e.1===v)||(e.1===s)||(e.1===t)||(e.1===u))&&9===l){7 4}};9=4;8.p=b;',36,36,'event|which|||false|if|function|return|document|isCtrl|window|contentprotector|eventbutton|keyCode||var|123|myevent|onkeydown|isNS|17|true|button|onkeypress|onmousedown|ondragstart|mousehandler|onkeyup|67|86|83|88|65|oncontextmenu|onmouseup|85'.split('|'),0,{}))*/
