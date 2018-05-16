import React from 'react';
import { render } from 'react-dom';
import {
    Router,
    Route,
    Switch,
} from 'react-router';
import history from './projectTools/history';
import './assets/styles/main.css';
import App from './App';
import Login from './pages/Login';
import http from './assets/utils/http';
import API from './api';
import popalert from './components/popalert';

//设置全局变量
window.http = http;
window.API = API;
window.popalert = popalert;
window.AppHistory = history;

render(
    <Router history={history}>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route component={App}/>
      </Switch>
    </Router>,
    document.getElementById('root')
);