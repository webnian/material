function getElementsByClassName(parent,className){
	if(parent.getElementsByClassName){
		return parent.getElementsByClassName(className);
	}else{
		var tagname=parent.getElementsByTagName("*");
		reg=new RegExp("(^|\\s)"+className+"($|\\s)");
		var arr=[];
		for(i=0;i<tagname.length;i++){
			if(reg.test(tagname[i].className)){
				arr.push(tagname[i]);
			}
		}
		return arr;
	}
}