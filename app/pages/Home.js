import React from 'react';
import Tag from '../components/tag';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
export default class extends React.Component{
	render(){
		const arr = [];
		for(let i=0; i<20; i++){
			arr.push({
				id: i,
				name: `tian${i}`
			})
		}
		return (
			<div className="page home">
             	<h1 onClick={()=>{alert(111)}}>首页：{store.user.name}</h1>
             	<div className="testImg"></div>
             	<img src={require('../assets/images/timg.jpeg')} />
				<br />
				<div style={{width:"500px"}}>
					{arr.map((item, i) => {
						return <Tag value={item.name} key={item.id} />
					}
					)}
				</div>
          	</div>
		)
	}
}