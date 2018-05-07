/**
 * API
 */

const API = {
	getWxInfoUrl: '/app-front/active/getShareImage',  //获取微信分享活动信息接口
	wechatShareUrl: '/app-front/bnhuser/getSignature',  
    codeSendUrl: '/app-front/user/dynamicCode',          //短信验证码接口
    codeSendImgUrl: '/app-front/bnhuser/pageImageCode',
    getToken: '/app-front/bnhuser/getToken',           //获取token
    maidianUrl: '/app-front/general/pageStaticinfo',  //落地页营销埋点
    imgCodeUrl: '/app-front/general/kaptcha',         //图形验证码
    getContentList: '/app-front/active/getContentList'
};

export default API;