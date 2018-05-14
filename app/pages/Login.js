import React from 'react';
import { Button } from 'antd';
import history from '../projectTools/history';
// import { observer } from 'mobx-react';
// import mainStore from '../stores/index';

// @observer
export default class extends React.Component {
	constructor(props) {
		super(props);
		// mainStore.getUrl(this.props.location.pathname)
	}
	loginMethod = () => {
		localStorage.setItem('isLogin', 'yes')
		history.push('/')
	}
	render(){
		return (
			<div className="page">
				<h1>登录页</h1>
        		<Button onClick={this.loginMethod}>点击模拟登陆</Button>
				{/* <p>hash方式传参为: aaaa: { this.props.match.params.aaaa } | bbbb: { this.props.match.params.bbbb }</p> */}
			</div>
		);
	}
}