import React from 'react';
import { observer } from 'mobx-react';
import mainStore from '../stores/index';

@observer
export default class extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="page error-page">
				<h1>用户个体画像</h1>
				{/* <p>hash方式传参为: aaaa: { this.props.match.params.aaaa } | bbbb: { this.props.match.params.bbbb }</p> */}
			</div>
		);
	}
}