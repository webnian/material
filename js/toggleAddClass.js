function addClass(obj,className){
	if(obj.className==""){		//如果原来没有class
		obj.className=className;
	}else{
		var arrClassName=obj.className.split(" ");
		var index=arrIndexOf(arrClassName,className);
		if(index==-1){
			obj.className+=" "+className;
		}
	}
}

function removeClass(obj,className){
	if(obj.className!=""){
		var arrClassName=obj.className.split(" ");
		console.log(className);
		var index=arrIndexOf(arrClassName,className);
		if(index!=-1){
			arrClassName.splice(index,1);
			obj.className=arrClassName.join(" ");
		}
	}
}


function hasClass(obj,className){
	if(obj.className==""){
		return false;
	}else{
		var arrClassName=obj.className.split(/\s+/);
		var index=arrIndexOf(arrClassName,className);
		if(index!=-1){
			return true;
		}else{
			return false;
		}
	}
}

function toggleClass(obj,className){  
    if(hasClass(obj,className)){  
        removeClass(obj, className);  
    }else{  
        addClass(obj, className);  
    }  
} 

function arrIndexOf(arr,v){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==v){
			return i;
		}
	}
	return -1;
}