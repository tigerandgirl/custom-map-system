import React from 'react';
import { observer } from 'mobx-react';
import mainStore from '../stores/index';
import Tree from '../components/tree';

@observer
export default class extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="page error-page">
				<h1>Tree</h1>
				<Tree />
			</div>
		);
	}
}