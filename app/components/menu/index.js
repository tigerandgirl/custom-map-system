import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

// 这是一个 无状态组件，使用的是 函数式组件 的写法。
// React.js 非常鼓励无状态组件，在 0.14 版本引入了函数式组件——一种定义不能使用 state 组件
const commonMenu = withRouter(({history}) => {
  return (
    <div>
      <Menu theme="dark" mode="inline" 
            defaultSelectedKeys={['/']} 
            selectedKeys={[history.location.pathname]} 
            defaultOpenKeys={[history.location.pathname.split('/')[1]]}>
        <Menu.Item key="/">
          <Icon type="user"/>
          <span>home</span>
          <NavLink to='/'></NavLink>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="user" />二级菜单</span>}>
            <Menu.Item key="/sub1/page1">
                <span>page1</span>
                <NavLink to='/sub1/page1'></NavLink>
            </Menu.Item>
            <Menu.Item key="/sub1/test1">
                <span>test1</span>
                <NavLink to='/sub1/test1'></NavLink>
            </Menu.Item>
            <Menu.Item key="/sub1/test2">
                <span>test2</span>
                <NavLink to='/sub1/test2'></NavLink>
            </Menu.Item>
        </SubMenu>
        <Menu.Item key="/page2">
          <Icon type="notification"/>
          <span>page2</span>
          <NavLink to='/page2'></NavLink>
        </Menu.Item>
        <Menu.Item key="/comment">
          <Icon type="video-camera"/>
          <span>comment</span>
          <NavLink to='/comment'></NavLink>
        </Menu.Item>
        <Menu.Item key="/echart">
          <Icon type="pie-chart"/>
          <span>echart</span>
          <NavLink to='/echart'></NavLink>
        </Menu.Item>
      </Menu>
    </div>
  )
})

export default commonMenu;