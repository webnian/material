function setCookie(name,value,date,path,domain,secure){
	var expires=new Date();
	expires.setDate(expires.getDate()+date);
	cookieText=encodeURIComponent(name)+"="+
	encodeURIComponent(value)+";expires="+expires;
	if(path){
		cookieText+=";path="+path;
	}
	if(domain){
		cookieText+=";domain="+domain;
	}
	if(secure){
		cookieText+=";"+secure;
	}
	document.cookie=cookieText;
	return decodeURIComponent(document.cookie);
}
function getCookie(name){
	var str = document.cookie.replace(/ /g,"");
	var arr=str.split(";");
	for(var i=0;i<arr.length;i++){
		var array = arr[i].split("=");
		if(array[0] == name) {
			return decodeURIComponent(array[1]);
		}
	}
	return null;
}

function removeCookie(name){
	setCookie(name,"",-1);
}