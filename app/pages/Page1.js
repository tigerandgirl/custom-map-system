import React from 'react';
import { Rate, Button, Alert } from 'antd';
import { getUrlParam, parseQueryString } from '../assets/utils';
import { observer } from 'mobx-react';
import testStore from '../stores/testStore';

@observer
export default class extends React.Component {
	constructor(props){
		super(props);
		this.params = parseQueryString(this.props.location.search);
		this.state = {
			starValue: 5
		}
		console.log(getUrlParam(this.props.location.search, 'id'));
	}

	handleChange = (starValue) => {
    this.setState({ starValue });
	}
	
	submitComment = () => {
		alert(this.state.starValue)
	}

	componentDidUpdate() {
		console.log(getUrlParam(this.props.location.search, 'id'));
	}

	render(){
		const { starValue } = this.state;
		return (
			<div className="page page1">
				{/*<h1>我是page1</h1>
				<p>解析url?id=5参数为: { getUrlParam(this.props.location.search, 'id') }</p>
				<p>第二种方式: { this.params.id }</p>*/}
      <ul>
				请求回来的数据：
        {
          testStore.list.map((item, index) => (
              <li key={index}>{item.name}</li>
          ))
        }
      </ul>
			<Rate onChange={this.handleChange} value={starValue} />
			<Button onClick={this.submitComment}>评价</Button>
			</div>
		);
	}
}