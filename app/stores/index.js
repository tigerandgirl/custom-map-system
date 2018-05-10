//公共store区域
import {useStrict, observable, action} from 'mobx';

useStrict(true);

class MainStore {
    constructor(){
      this.getName();
    }
    @observable user = {};
    @observable isLayerShow = true; //遮罩层显示状态
    @action getName = async () => {
        this.user = {id: 1, name: 'tester'};
    };
    //隐藏html遮罩层
    @action hideLayer = async () => {
        this.isLayerShow = false;
        //隐藏遮罩层
        let rootDom=document.documentElement; //html标签
        rootDom.className='loaded';
        setTimeout(()=>{
            rootDom.className='loaded end';
        },600);
    }
}

export default new MainStore();