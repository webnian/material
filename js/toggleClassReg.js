function hasClass(obj, className) {  
    return obj.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));  
}  
  
function addClass(obj, className) {  
    if (!this.hasClass(obj, className)){
    	obj.className += " " + className;
    } 
}  
  
function removeClass(obj, className) {  
    if (hasClass(obj, className)) {  
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
}  
  
function toggleClass(obj,className){  
    if(hasClass(obj,className)){  
        removeClass(obj, className);  
    }else{  
        addClass(obj, className);  
    }  
}  
  
function toggleClassTest(){  
    var obj = document. getElementById('test');  
    toggleClass(obj,"testClass");  
}