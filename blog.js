	var _data = '_key='+_cgk+'&_title='+_title+'&_des='+_des+'&_href='+_href+'&_type='+paid+'&_img='+_img+'&_req_id='+_req_id+'&_camp_id='+_camp_id;
	var _target_fff_v2 = 'http://tracking.thanh.com.vn/blog.php';
	var xmlHttp = new XMLHttpRequest();

	xmlHttp.open("POST", _target_fff_v2, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlHttp.send(_data);
