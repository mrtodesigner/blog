 //++++ Quang cao chay doc 2 ben

function FloatTopDiv() 
{ 
	startLX = ((document.body.clientWidth -MainContentW)/2) - (LeftBannerW+LeftAdjust) , startLY = TopAdjust; 
	startRX = ((document.body.clientWidth -MainContentW)/2) + (MainContentW+RightAdjust) , startRY = TopAdjust; 
	var d = document; 
	function ml(id) 
	{ 
		var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id]; 
		el.sP=function(x,y){this.style.left=x + 'px';this.style.top=y + 'px';}; 
		el.x = startRX; 
		el.y = startRY; 
		return el; 
	} 
	function m2(id) 
	{ 
		var e2=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id]; 
		e2.sP=function(x,y){this.style.left=x + 'px';this.style.top=y + 'px';}; 
		e2.x = startLX; 
		e2.y = startLY; 
		return e2; 
	} 
	window.stayTopLeft=function() 
	{ 
		if (document.documentElement && document.documentElement.scrollTop) 
			var pY =  document.documentElement.scrollTop; 
		else if (document.body) 
			var pY =  document.body.scrollTop; 
		if (document.body.scrollTop > 30){startLY = 3;startRY = 3;} else {startLY = TopAdjust;startRY = TopAdjust;}; 
		ftlObj.y += (pY+startRY-ftlObj.y)/16; 
		ftlObj.sP(ftlObj.x, ftlObj.y); 
		ftlObj2.y += (pY+startLY-ftlObj2.y)/16; 
		ftlObj2.sP(ftlObj2.x, ftlObj2.y); 
		setTimeout("stayTopLeft()", 1); 
	} 
	ftlObj = ml("divAdRight"); 
	//stayTopLeft(); 
	ftlObj2 = m2("divAdLeft"); 
	stayTopLeft(); 
} 
function ShowAdDiv() 
{ 
	var objAdDivRight = document.getElementById("divAdRight"); 
	var objAdDivLeft = document.getElementById("divAdLeft");        
	objAdDivRight.style.display = "block"; 
	objAdDivLeft.style.display = "block"; 
	FloatTopDiv(); 
}

var clientWidth	=	window.screen.width;
            if(clientWidth >= 1024){
                document.write('<div id="divAdRight" style="position: absolute; top: 0px; width:100px; height:500px; overflow:hidden;"> <a href="http://phunsuongkhanhxuan.com/sua-chua-may-phun-suong/" target="_blank"><img src="http://phunsuongkhanhxuan.com/wp-content/uploads/2016/08/sua-chua-may-phun-suong.jpg"  width ="100" alt="sửa chữa máy phun sương" /></a></div><div id="divAdLeft" style="position: absolute; top: 0px; width:100px; height:500px; overflow:hidden;"><a href="http://phunsuongkhanhxuan.com/lap-dat-may-phun-suong" target="_blank" title="lắp đặt máy phun sương"><img src="http://phunsuongkhanhxuan.com/wp-content/uploads/2016/08/lap-dat-he-thong-may-phun-suong.jpg"  width ="100" alt="lắp đặt máy phun sương" /></a></div>');	
                
                var MainContentW = 1000;
                var LeftBannerW = 100;
                var RightBannerW = 100;
                var LeftAdjust = 10;
                var RightAdjust = 10;
                var TopAdjust = 80;
                ShowAdDiv();
                window.onresize=ShowAdDiv; 
            }