import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Breadcrumb, Button } from 'antd';
import { observer } from 'mobx-react';
import mainStore from '../../stores/index';
import './index.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@observer
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultkey : ['page1'],
            current: 'page1'
        }
        // console.log(this.props)
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }

    componentWillMount() {
        console.log(this.state.defaultkey)
        // let mainUrl = mainStore.pageUrl.split('/')[1];
        console.log(mainStore)
        // switch (mainUrl) {
        //     case "page1":
        //         this.setState({ defaultkey: ['page1'] })
        //         console.log(1)
        //         break;
        //     case "page2":
        //         this.setState({ defaultkey: ['page2'] })
        //         console.log(2)
        //         break;
        //     case "comment":
        //         this.setState({ defaultkey: ['comment'] })
        //         console.log(3)
        //         break;
        //     default:
        //         this.setState({ defaultkey: ['page1'] })
        //         console.log("c")
        //         break;
        // }
    }

    componentDidMount() {
        let mainUrl = mainStore.pageUrl.split('/')[1];
        console.log(mainUrl)
        switch (mainUrl) {
            case "page1":
                this.setState({ defaultkey: ['page1'] })
                break;
            case "page2":
                this.setState({ defaultkey: ['page2'] })
                break;
            case "comment":
                this.setState({ defaultkey: ['comment'] })
                break;
            default:
                this.setState({ defaultkey: ['page1'] })
                break;
        }
    }

    render() {
      return (
        <div className="ant-layout-aside">
            {/* <div className="ant-layout-aside"> */}
                <aside className="ant-layout-sider">
                    <div className="ant-layout-logo">包银消费金融</div>
                    <Menu mode="inline" theme="dark" selectedKeys={[mainStore.pageUrl.split('/')[1]]}
                        defaultSelectedKeys={['page1']} defaultOpenKeys={['sub1']}>
                        <SubMenu key="sub1" title={<span><Icon type="user" />导航测试</span>}>
                            <Menu.Item key="page1"><Link to="/page1?id=6">Page1</Link></Menu.Item>
                            <Menu.Item key="page2"><Link to="/page2/123/456">Page2</Link></Menu.Item>
                            <Menu.Item key="comment"><Link to="/comment">Comment</Link></Menu.Item>
                            <Menu.Item key="4">选项4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
                            <Menu.Item key="5">选项5</Menu.Item>
                            <Menu.Item key="6">选项6</Menu.Item>
                            <Menu.Item key="7">选项7</Menu.Item>
                            <Menu.Item key="8">选项8</Menu.Item>    
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
                            <Menu.Item key="9">选项9</Menu.Item>
                            <Menu.Item key="10">选项10</Menu.Item>
                            <Menu.Item key="11">选项11</Menu.Item>
                            <Menu.Item key="12">选项12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </aside>
            {/* </div> */}
            <div className="ant-layout-main">
                <div className="ant-layout-header">这是header</div>
                <div className="ant-layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                        <Breadcrumb.Item>某应用</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="ant-layout-container">
                    <div className="ant-layout-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
            <div className="ant-layout-footer">
                Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
            </div>
        </div>
      );
    }
  }
  