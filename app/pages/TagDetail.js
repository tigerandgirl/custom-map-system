import React from 'react';
import {
    Router,
    Route,
    Switch,
} from 'react-router';
import router from '../router/router';
import PrivateRoute from '../projectTools/PrivateRoute';

import TagDetail from './TagDetail';
import TagDetailAll from './TagDetailAll';
import TagDetailCon from './TagDetailCon';
import ErrorPage from "./ErrorPage";
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
					<div>标签树</div>
					
						{/* <Route exact path='/tagDetail' component={TagDetailAll}/> */}
						<Switch>
							<Route exact path='/tagDetail' component={TagDetailAll}/>
							<Route path='/tagDetail/:abc' component={TagDetailCon}/>
						</Switch>
			</div>
		);
	}
}