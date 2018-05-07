import React from 'react';
import { observer } from 'mobx-react';
import Routers from './router';
import Layout from './components/layout/index';
import store from './stores/index.js';
window.store = store;

@observer
class App extends React.Component {
	constructor(){
        super();
        this.state = { show: false };
	}
    componentDidMount(){
        //模拟初始化请求
        setTimeout(() => this.setState({ show: true }), 2000);
    }
    render() {
        return (
        //   this.state.show && <Routers />
          this.state.show && <Layout />
        )
    }
}

export default App;