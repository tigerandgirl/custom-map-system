import React from 'react';
import { getUrlParam, parseQueryString } from '../assets/utils';
import { observer } from 'mobx-react';

@observer
export default class extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="page error-page">
				<div>全景标签</div>
				{/* <p>hash方式传参为: aaaa: { this.props.match.params.aaaa } | bbbb: { this.props.match.params.bbbb }</p> */}
			</div>
		);
	}
}