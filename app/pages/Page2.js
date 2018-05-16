import React from 'react';
import { getUrlParam, parseQueryString } from '../assets/utils';
import { observer } from 'mobx-react';
import WordCloud from '../components/wordcloud'

@observer
export default class extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="page error-page">
				<h1>我是page2</h1>
				<WordCloud />
				{/* <p>hash方式传参为: aaaa: { this.props.match.params.aaaa } | bbbb: { this.props.match.params.bbbb }</p> */}
			</div>
		);
	}
}