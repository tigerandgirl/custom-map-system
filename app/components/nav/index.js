import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default class extends React.Component{
	render(){
		return (
			<div className="nav">
				<NavLink className="nav__item" exact to="/" activeClassName="nav__item--actice">home</NavLink> | &nbsp;
				<NavLink className="nav__item" to="/page1?id=5" activeClassName="nav__item--actice">page1|param方式传参</NavLink> | &nbsp;
				<NavLink className="nav__item" to="/page2/helloworld/rt" activeClassName="nav__item--actice">page2|hash方式传参</NavLink> | &nbsp;
				<NavLink className="nav__item" to="/kkk" activeClassName="nav__item--actice">404</NavLink> | &nbsp;
				<NavLink className="nav__item" to="/zzz" activeClassName="nav__item--actice">重定向(不能回退)</NavLink>
			</div>
		);
	}
}