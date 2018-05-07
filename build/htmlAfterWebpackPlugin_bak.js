const pluginName = 'htmlAfterWebpackPlugin';

const assetsHelp = (data) => {
	let css = [],js = [];
	data.js.map(item => js.push(`<script src="${item}"></script>`));
	data.css.map(item => css.push(`<link rel="stylesheet" href="${item}">`));
	return {css, js};
}

class htmlAfterWebpackPlugin {
    apply(compiler) {
        compiler.plugin('compilation', (compilation) => {
        	compilation.plugin('html-webpack-plugin-before-html-processing',(data, cb) => {
     			let _html = data.html;
     			const result = assetsHelp(data.assets);
     			console.log(result);
     			_html = _html.replace("<!--injectcss-->",result.css).replace("<!--injectjs-->",result.js);
     			data.html = _html;
     			cb(null, data);
      		});
        });
    }
}
module.exports = htmlAfterWebpackPlugin;