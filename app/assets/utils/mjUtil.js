/**************** 猛犸设备指纹公共方法 ******************/
const mjConfig = {
	/*tid:'sw6ax7fvuuhylcd6kz2xng9bfntycuyo', //测试tid
    url:'https://beta.mxtrk.com/jta/event',*/
    tid:'8enu94eqhvol15pe71als1ojbo0fe147', //生产tid
    url:'https://trk.mxtrk.com/jta/event',
    eventName:{
        'pageIn':'PAGE_IN',
        'codeSend':'CODE_SEND', //发验证码
        'calClick':'CAL_CLICK',
        'downloadClick':'DOWNLOAD_CLICK',
        'downloadClickBtm':'DOWNLOAD_CLICK_BTM', //底部下载按钮页面跳转
        'pageShare':'PAGE_SHARE',
        'checkPhoneNumber':'CHECK_PHONE_NUMBER',
        'pageScroll':'PAGE_SCROLL',
        'register':'REGISTER'
    },
    pointPage:{
        'appDownloadPage':'appDownloadPage',
        'signlowRatePage':'signlowRatePage',
        'signHighLimPage':'signHighLimPage'
    },
    selfUrl:''
};

/**
 * 猛犸事件处理
 * @param  event_type [事件名称]
 * @param  tick       [uuid]
 * @param  pointPage  [来源页面]
 * @param  callback   [description]
 */
const mjHandler = (event_type, tick, callback, pointPage = '') => {
	/*猛犸初始化*/
    mj('set_params', {
        url: mjConfig.url, // 事件发送地址
        tid: mjConfig.tid  // 绑定在平台上的 API key
    });
    /*事件绑定*/
    mj('customize_event', {
    	"event_type": event_type,
        "tick": tick,
        "fields": {
            'from':pointPage
            }
        }, (status, data) => {
			console.log('猛犸: ' + status);
        	setTimeout(callback(status), 500);
        }
    );
};

export {mjConfig, mjHandler};