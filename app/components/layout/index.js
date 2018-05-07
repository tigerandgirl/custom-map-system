import React from 'react'
import {Layout, Icon, Button} from 'antd';
import {
  Switch,
} from 'react-router-dom';
import router from '../../router/router';

import CommonMenu from '../menu/index';
import PrivateRoute from '../../projectTools/PrivateRoute';
import {withRouter} from "react-router";
import history from "../../projectTools/history";
import './index.css';
import ErrorPage from "../../pages/ErrorPage";

const {Header, Sider, Content} = Layout;

class MyLayout extends React.Component {

  state = {
    collapsed: false  //默认侧向展开导航栏
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  logout = () => {
    localStorage.removeItem('isLogin')
    history.push('/login')
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="ant-layout-logo">包银消费金融</div>
          <CommonMenu />
        </Sider>
        <Layout>
          <Header style={{background: '#fff', paddingLeft: '50px'}}>
            {/* <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            /> */}
            <Button onClick={this.logout}>退出</Button>
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
            <Switch>
              {router.map((route, i) => <PrivateRoute key={i} exact={!!route.exact} path={route.path}
                                                      component={route.component}/>)}
              <PrivateRoute component={ErrorPage}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(MyLayout)
