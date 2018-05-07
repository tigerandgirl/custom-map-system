/**
 * 测试store
 */
import {useStrict, observable, action, runInAction, computed} from 'mobx';

useStrict(true);

class TestStore {
    constructor(){}
    @observable list = [];
    @observable token;
	activeId = 'youhuics';
    @action getContentList = async () => {
        const data = await http('POST', API.getContentList, {activeId: this.activeId, mobile: ''});
        console.log(data);
        runInAction(() => {
            this.list = data.content;
        });
    };
    @action getToken = async () => {
    	const data = await http('GET', API.getToken);
        console.log(data);
        runInAction(() => {
            this.token = data.token;
        });
    };
    @action getSmsCode = async () => {
    	const para = {
    		phoneNumber: '13810001545', 
            codeType: '01', 
            imageId: '', 
            imageCode: '', 
            environmentInfo: {
            	gpsProvince: '北京市', 
				gpsCity: '北京市'
			},
			terminalInfo: {deviceKey:'1234567890123456'},
			type: 'rec'
    	};
    	const data = await http('POST', API.codeSendImgUrl, para, false, '67E256B6A1561701');
    	console.log(data);
    };
}

export default new TestStore();