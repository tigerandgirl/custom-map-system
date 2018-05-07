/*动态加载script*/
export default function (url, callback, async = true){
  let s = document.createElement('script'),d = document.getElementsByTagName('script')[0];
	if(async) s.async = 1;
	s.type = 'text/javascript';
	s.src = url;
	d.parentNode.insertBefore(s, d);
  	if(s.readyState){//IE
     	s.onreadystatechange(function(){
     		if(s.readyState === 'loaded' || s.readyState === 'complete'){
     	   		s.onreadystatechange = null;
           		callback && callback();
        	}
     	});
  	}else{
    	s.onload = function(){
      		callback && callback();	
    	}
  	}
};