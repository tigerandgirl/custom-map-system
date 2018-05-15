import React from 'react';
import { Icon } from 'antd';
import history from "../../projectTools/history";
import { observer } from 'mobx-react';
import mainStore from '../../stores/index';
import './index.css';

@observer
export default class extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            listData: [],
            show: false
        }
    }
    // 跳转标签详情页
    handleToDetail(id){
        // history.push(`/tagDetail/tagDetailCon?id=${id}`);
        history.push(`/tagDetail/123?id=${id}`);
        this.setState({
            show: false
        })
    }
    // 跳转标签全景页
    handleToTagDetailAll(){
        history.push(`/tagDetail`);
        this.setState({
            show: false
        })
    }
    // 展示列表
    handleShowList(){
        this.setState({
            show: true
        })
    }
    // 隐藏列表
    handleHideList(){
        this.setState({
            show: false
        })
    }
    // 加载列表
    handleLoadList(type){
        this.handleShowList();
        if(type == 'hot'){
            this.setState({
                listData: [{
                    'id': 123,
                    'name': '包你还'
                },
                {
                    'id': 234,
                    'name': '包你贷用户包你贷用户'
                },
                {
                    'id': 567,
                    'name': '最热'
                },
                {
                    'id': 23,
                    'name': '测试'
                },
                {
                    'id': 45,
                    'name': '测试'
                },
                {
                    'id': 56,
                    'name': '测试'
                },
                {
                    'id': 67,
                    'name': '测试'
                },
                {
                    'id': 87,
                    'name': '测试'
                },
                {
                    'id': 89,
                    'name': '测试'
                },
                {
                    'id': 90,
                    'name': '测试'
                }]
            })
        }else{
            this.setState({
                listData: [{
                    'id': 123,
                    'name': '包你还'
                },
                {
                    'id': 234,
                    'name': '最新'
                },
                {
                    'id': 567,
                    'name': '测试'
                },
                {
                    'id': 23,
                    'name': '测试'
                },
                {
                    'id': 45,
                    'name': '测试'
                },
                {
                    'id': 56,
                    'name': '测试'
                },
                {
                    'id': 67,
                    'name': '测试'
                },
                {
                    'id': 87,
                    'name': '测试'
                },
                {
                    'id': 89,
                    'name': '测试'
                },
                {
                    'id': 90,
                    'name': '测试'
                }]
            })
        }
    }

	render(){
		return (
			<div className="right-sidebar-wrp">
                <div className="right-sidebar-tab">
                    <div className="sidebar-btn sidebar-btn-hot" onMouseEnter={this.handleLoadList.bind(this, 'hot')} onMouseLeave={this.handleHideList.bind(this)}>最<br/>热</div>
                    <div className="sidebar-btn-line"></div>
                    <div className="sidebar-btn sidebar-btn-new" onMouseEnter={this.handleLoadList.bind(this, 'new')} onMouseLeave={this.handleHideList.bind(this)}>最<br/>新</div>
                </div>
                <div className={this.state.show ? 'right-sidebar-content show' : 'right-sidebar-content'} onMouseEnter={this.handleShowList.bind(this)} onMouseLeave={this.handleHideList.bind(this)}>
                    <div className="right-sidebar-tit">TOP 10</div>
                    <ul className="sidebar-ul">
                        {this.state.listData.map((item, i) =>
                            <li className="sidebar-li" key={item.id} onClick={this.handleToDetail.bind(this, item.id)} >{++i}. {item.name}</li>
                        )}
                    </ul>
                    <div className="sidebar-more-btn" onClick={this.handleToTagDetailAll.bind(this)}>更多 <Icon type="right" /></div>
                </div>

			</div>
		);
	}
}