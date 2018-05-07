/**
 * 第三方微信分享功能工具类
 * 动态信息
 */
import loadScript from './loadscript';

//封装微信基础配置信息
const encapWxConfig = (wx, opts) => {
	wx.config({
		debug: false,
		appId: opts.appId,
		nonceStr: opts.nonceStr,
		timestamp: opts.timestamp,
		signature: opts.signature,
		// 所有要调用的 API 都要加到这个列表中
		jsApiList: [
		  	'checkJsApi',
		  	'onMenuShareTimeline',
		  	'onMenuShareAppMessage',
		  	'onMenuShareQQ',
		  	'onMenuShareQZone',
		  	'onMenuShareWeibo',
		  	'hideMenuItems',
		  	'showMenuItems',
		  	'hideAllNonBaseMenuItem',
		  	'showAllNonBaseMenuItem',
		  	'hideOptionMenu',
		  	'showOptionMenu',
		  	'closeWindow',
		  	'scanQRCode'
		]
	});
};

const encapShareInfo = (opts) => {
	return {
		title: opts.title, // 分享标题
		desc: opts.desc, // 分享描述
		link: opts.link, // 分享链接
		imgUrl: opts.imgUrl, // 分享图标
		success: function () { 
			//用户确认分享后执行的回调函数
			popalert.fade('分享成功');
		},
		cancel: function () { 
			//用户取消分享后执行的回调函数
		}
	};
};

//微信分享准备
const wxReady = (wx, info) => {
	wx.ready(function(){
		//分享到朋友圈自定义分享内容接口
		wx.onMenuShareTimeline(info);
		//分享给朋友自定义分享内容接口
		wx.onMenuShareAppMessage(Object.assign({type: '', dataUrl: ''}, info));
		//QQ好友
		wx.onMenuShareQQ(info);
		//QQ空间
		wx.onMenuShareQZone(info);
		//腾讯微博
		wx.onMenuShareWeibo(info);

	});
};

export default (opts) => {
	loadScript('static/js/jweixin-1.2.0.js', () => {
       	console.log('load wxjdk success!');
		encapWxConfig(wx, opts);
		wxReady(wx, encapShareInfo(opts));
    });
};