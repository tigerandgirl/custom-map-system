/**
 * 工具集
 */

/**
 * 解析URL参数中的莫一项
 * @param  {[string]} search [?xx=XX]
 * @param  {[string]} name [xx]
 * @return {[string or null]}
 */
export const getUrlParam = (search, name) => {
    if(search != '') {
        const r = search.substr(1).match(new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'));
        return r != null ? r[2] : null;
    }else{
        return '';
    }
};

/**
 * 解析URL全部参数
 * @param  {[string]} search [?xx=XX]
 * @return {[object]}
 */
export const parseQueryString = (search) => {
    if(search){
        const result = {};
        const arr = search.split('?')[1].split('&');
        for(let i=0,len=arr.length;i<len;i++){
          let _arr = arr[i].split('=');
          result[_arr[0]] = _arr[1];
        }
        return result;
    }
};

/******************* 常用工具方法 ************************/
const util = {};
const reg = {};
//将名字后面的部分变成*
export const changeName = name => {
    let arr = name.split(''),len = name.length;
    for(let a=0;a<len;a++){
        if(a!=0) arr[a] = '*';
    }
    return arr.join('');
    // name.length > 1 ? [...name].fill('*', 1).join('') : name;
};

//手机号码中间四位变成*
export const changeTel = tel => {
    if(tel){
        let arr = tel.split('');
        arr.splice(3,4,'*','*','*','*');
        return arr.join('');
    }else{
        return '';
    }
    // return tel ? [...tel].fill('*', 3, 7).join('') : '';
};

//将2017-10-20（或20171020）改成2017年10月20日
export const changeDateText = str => {
    let arr = [];
    if(str.indexOf('-') !== -1){
        arr = str.split('-');
        arr.splice(1,0,'年');
        arr.splice(3,0,'月');
    }else{
        arr = str.split('');
        arr.splice(4,0,'年');
        arr.splice(7,0,'月');
    }
    return arr.join('')+'日';
};

//生成uuid [参数: len-长度，radix进制]
export const createUUID = (len, radix) => {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
        uuid = [], i;
    radix = radix || chars.length;
    if(len){
        // Compact form
        for(i = 0;i < len;i++) uuid[i] = chars[0 | Math.random()*radix];
    }else{
        // rfc4122, version 4 form
        var r;
        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for(i = 0;i < 36;i++){
            if(!uuid[i]){
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
};


/*判断设备信息*/
const userAgent = navigator.userAgent;
export const BrowserInfo = {
    userAgent: userAgent,
    isAndroid: userAgent.match(/android/ig),
    isIphone: userAgent.match(/iphone|ipod/ig),
    isIpad: userAgent.match(/ipad/ig),
    isWeixin: userAgent.match(/MicroMessenger/ig), //微信
    isSinaWeibo: userAgent.match(/Weibo/ig), //新浪微博
    isQQ: userAgent.match(/QQ/ig), //QQ
    isAlipay: userAgent.match(/Alipay/ig), //支付宝
    isbyxf: userAgent.match(/byxf/ig), //包你还app
    isIosVersionLessThanSeven: function () {
        if (this.isIphone || this.isIpad) {
            return Boolean(userAgent.match(/os [1-6]_\d[_\d]* like mac/ig));
        }
        return false;
    }
}

//区分是App、其他渠道
export const isApp = () => navigator.userAgent.match(/byxf/ig);

//区分是android 还是 ios
export const getSystem = () => {
    if(BrowserInfo.isAndroid){
        return 'android';
    }else if(BrowserInfo.isIphone || BrowserInfo.isIpad){
        return 'ios';
    }else{
        return 'pc';
    }
}

//区分支付宝与包你还App
export const getPlatform = () => {
    if(BrowserInfo.isAndroid){
        if(BrowserInfo.isAlipay){
            return 'alipay_android';
        }else if(BrowserInfo.isbyxf){
            return 'byxf_android';
        }else{
            return 'android';
        }
        
    }else if(BrowserInfo.isIphone || BrowserInfo.isIpad){
        if(BrowserInfo.isAlipay){
            return 'alipay_ios';
        }else if(BrowserInfo.isbyxf){
            return 'byxf_ios';
        }else{
            return 'ios';
        }
    }else{
        return 'pc';
    }
}

//下载
function urlParams() {
    var args = new Object();
    var query = location.search.substring(1);//获取查询串
    var pairs = query.split("&");
    for (var i = 0; i < pairs.length; i++) {
        var params = pairs[i].split('=');
        if (params.length < 2)continue;
        args[params[0]] = params[1];
    }
    return args;
};
export const downLoadApp = () => {
    const androidUrl = 'http://www.baoyinxiaofei.com/byxf-offical.apk',
        iosUrl = 'https://itunes.apple.com/us/app/包银消费金融/id1168928180?l=zh&ls=1&mt=8',
        baoyinTencent = "http://a.app.qq.com/o/simple.jsp?pkgname=com.baoyin.credit",
        qdParams = urlParams();
    //广点通 || 今日头条
    if(qdParams.qdId == "gdt" || qdParams.qdId == "Alipay" || BrowserInfo.isWeixin || BrowserInfo.isAlipay) {
        window.location.href = baoyinTencent;
    }else if(BrowserInfo.isIphone && BrowserInfo.isSinaWeibo){
        let layer = document.getElementById('download_layer')
        layer.style.display = 'block';
        layer.onclick = function(){
            this.style.display = 'none';
        }
    }else if (BrowserInfo.isIphone) {
        window.location.href = iosUrl;
    }else if (BrowserInfo.isAndroid){
        window.location.href = androidUrl;
    }
}

/******************* 常用正则表达式 ************************/
//校验手机号正则
export const checkTel = str => /^1[3|4|5|7|8][0-9]{9}$/.test(str);

//校验密码正则
export const checkPass = str => /^([0-9]|[a-z]){6,8}$/.test(str);

//身份证校验正则
export const checkIden = str => /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/.test(str);

export { util, reg };

