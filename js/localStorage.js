function setItem(key,data){
	return window.localStorage.setItem(key,window.JSON.stringify(data));
}
function getItem(key){
	return window.JSON.parse(window.localStorage.getItem(key));
}
function removeItem(key){
	return window.localStorage.removeItem(key);
}