function addEvent(ele,type,func){
    if(ele.addEventListener){
            ele.addEventListener(type,func,false);
    }else if(ele.attachEvent){
            ele.attachEvent('on'+type,func);
    }else{
            ele['on'+type]=func;
    }
}
//删除事件
function removeEvent(ele,type,func){
    if(ele.removeEventListener){
        ele.removeEventListener(type,func,false);
    }else if(ele.detachEvent){
        ele.detachEvent('on'+type,func);   //IE9以下浏览器
    }else{
        ele['on'+type]=null;
    }
}
//阻止默认行为
function preventEvent(ev){
    var ev=ev||window.event;
    if(ev.preventDefault){
        ev.preventDefault();
    }else{  
        ev.returnValue=false;   //IE
    } 
}
//阻止浏览器默认
function preventDefault(e) {    
    if(e && e.preventDefault){
   　　  		e.preventDefault();    
    } else {    
   　 　//IE中阻止函数器默认动作的方式     
   　　 window.event.returnValue = false;     
    }
    return false;    
}    
//阻止冒泡
function stopEvent(ev){
    var ev=ev||window.event;
    if(ev.stopPropagation){
        ev.stopPropagation();
    }else{  
        ev.cancelBubble();   //IE
    } 
}