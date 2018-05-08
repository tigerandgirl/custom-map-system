import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
export default class extends React.Component{
	render(){
		return (
			<div className="page home">
             	<h1 onClick={()=>{alert(111)}}>首页：{store.user.name}</h1>
             	<div className="testImg"></div>
             	<img src={require('../assets/images/test.png')} />
          	</div>
		)
	}
}