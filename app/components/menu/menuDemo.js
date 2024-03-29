import React from 'react'
import { Menu, Icon } from 'antd';
import { NavLink, withRouter } from 'react-router-dom'

// 这是一个 无状态组件，使用的是 函数式组件 的写法。
// React.js 非常鼓励无状态组件，在 0.14 版本引入了函数式组件——一种定义不能使用 state 组件
const MenuDemo = withRouter(({history}) => {
  return (
    <div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']} selectedKeys={[history.location.pathname]}>
        <Menu.Item key="/">
          <Icon type="user"/>
          <span>button</span>
          <NavLink to='/'></NavLink>
        </Menu.Item>
        <Menu.Item key="/input">
          <Icon type="video-camera"/>
          <span>input</span>
          <NavLink to='/input'></NavLink>
        </Menu.Item>
        <Menu.Item key="/private_route">
          <Icon type="video-camera"/>
          <span>PrivateRoute</span>
          <NavLink to='/private_route'></NavLink>
        </Menu.Item>
        <Menu.Item key="/table">
          <Icon type="video-camera"/>
          <span>table</span>
          <NavLink to='/table'></NavLink>
        </Menu.Item>
        <Menu.Item key="/component">
          <Icon type="video-camera"/>
          <span>组件写法</span>
          <NavLink to='/component'></NavLink>
        </Menu.Item>
      </Menu>
    </div>
  )
})

export default MenuDemo