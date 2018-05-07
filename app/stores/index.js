//公共store区域
import {useStrict, observable, action} from 'mobx';

useStrict(true);

class MainStore {
    constructor(){
      this.getName();
    }
    @observable user = {};
    @observable selectedKeys = 1;
    @observable pageUrl = '';
    @action getName = async () => {
        this.user = {id: 1, name: 'tester'};
    };
    // 更新选中菜单状态
    @action updateSelectedKeys = async (key) => {
        this.selectedKeys = key;
    }
    // 获取url
    @action getUrl = async (url) => {
        this.pageUrl = url;
    }
}

export default new MainStore();