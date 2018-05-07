import React from 'react';
import CommentApp from '../components/comment/CommentApp'
import { observer } from 'mobx-react';

@observer
export default class extends React.Component{
	constructor(props) {
		super(props)
	}
	render(){
		return (
			<div>
				 {/* <img src={require('../assets/images/test.png')} /> */}
				 <CommentApp />
          	</div>
		)
	}
}