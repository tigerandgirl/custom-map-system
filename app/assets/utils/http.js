import axios from 'axios';

if(process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'https://test5.baoyinxiaofei.com:18001';
}else if(process.env.NODE_ENV == 'test') {
    axios.defaults.baseURL = 'https://192.168.132.11';
}else if(process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = '';
}

/**
 * http请求
 * type GET OR POST
 * url api地址
 * para 参数
 * mask boolean 是否显示loading mask
 */
const http = (type, url, para={}, mask=false, token='') => {
    // let param={openId:window.store.Auth.openId,userId:window.store.Auth.userId,paging:false,...para};
    return new Promise((resolve,reject) => {
        mask && window.popalert.waitstart();
        axios({
            method: type,
            url: url,
            data: type=='POST' ? para : null,
            params: type=='GET' ? para : null,
            responseType: 'json',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type':'application/json;charset=utf-8',
                'token': token
            }
        })
        .then(response => {
            mask && window.popalert.waitend();
            resolve(response.data);
        })
        .catch(function (error) {
            console.log(error);
            mask && window.popalert.waitend();
            window.popalert.fade('网络错误，请稍后重试');
            // setTimeout(()=>{
                // window.popalert.fade('网络错误，请稍后重试');
            // },500);
            reject(err);
        });
    });
};

export default http;
