import React from 'react';
import { getUrlParam, parseQueryString } from '../assets/utils';
import { observer } from 'mobx-react';
import mainStore from '../stores/index';

@observer
export default class extends React.Component {
	constructor(props) {
		super(props);
		console.log(getUrlParam(this.props.location.search, 'id'));
    }
    
    componentDidUpdate() {
		console.log(getUrlParam(this.props.location.search, 'id'));
    }
    
	render(){
		return (
			<div>
				<h1>标签详情</h1>
                <div>{getUrlParam(this.props.location.search, 'id')}</div>
			</div>
		);
	}
}