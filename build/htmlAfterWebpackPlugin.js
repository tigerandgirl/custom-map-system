
const pluginName = 'htmlAfterWebpackPlugin';

const assetsHtmlHelp = (html, data) => {
    let jsArr = [],cssArr = data.css,_cssHtml = '';
    //处理css
    for(let i=0;i<cssArr.length;i++){
    	_cssHtml += '<link rel="stylesheet" type="text/css" href="' + cssArr[i] + '"/>'
    }
    html = html.replace("<!--injectcss-->", _cssHtml);
    
    //处理js
	data.js.map(item => jsArr.push("'" + item + "'"));
	let _jsHtml = `
	<script id='bsb_css'>
	(function(){
		var jsArr=[${jsArr}],doc=document,flag=false,_bj=[];
		for(var a=0;a<localStorage.length;a++){
			var it=localStorage.key(a);
			if(it.indexOf('js')!=-1){_bj.push(it);}
		}
		for(var i=0;i<jsArr.length;i++){
			(function(j){
				var jt=localStorage.getItem(j);
				if(jt){
					var script=document.createElement('script');
					script.setAttribute('type','text/javascript');
					script.innerHTML=jt;
					doc.body.appendChild(script)
				}else{
					flag=true;
					axios.get(j).then(function(data){
						localStorage.setItem(j,data.data);
					});
				}
			})(jsArr[i]);
		}
		if(flag){
			LazyLoad.js(jsArr,function(){});
			for(var m=0;m<_bj.length;m++){
				localStorage.removeItem(_bj[m]);
			}
		}
	})();
	</script>
	`;

    html = html.replace("<!--injectjs-->", _jsHtml);
	return html;
}

class htmlAfterWebpackPlugin {
    apply(compiler) {
        compiler.plugin('compilation', (compilation) => {
        	compilation.plugin('html-webpack-plugin-before-html-processing',(data, cb) => {
     			data.html = assetsHtmlHelp(data.html, data.assets);
     			cb(null, data);
      		});
        });
    }
}
module.exports = htmlAfterWebpackPlugin;