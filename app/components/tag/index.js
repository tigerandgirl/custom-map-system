import React from 'react';
import { Button } from 'antd';
import { observer } from 'mobx-react';
import mainStore from '../../stores/index';
import './index.css';

@observer
export default class extends React.Component {
	constructor(props) {
        super(props);
    }

	render(){
		return (
            <Button className="tag-wrp">{this.props.value}</Button>
		);
	}
}