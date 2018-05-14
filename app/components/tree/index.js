import React from 'react';
import { Tree, Input, Button } from 'antd';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const treeData = [{
  title: '0-0',
  key: '0-0',
  children: [{
    title: '0-0-0',
    key: '0-0-0',
    children: [
      { title: '0-0-0-0', key: '0-0-0-0' },
      { title: '0-0-0-1', key: '0-0-0-1' },
      { title: '0-0-0-2', key: '0-0-0-2' },
    ],
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [
      { title: '0-0-1-0', key: '0-0-1-0' },
      { title: '0-0-1-1', key: '0-0-1-1' },
      { title: '0-0-1-2', key: '0-0-1-2' },
    ],
  }, {
    title: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: '0-1',
  key: '0-1',
  children: [
    { title: '0-1-0-0', key: '0-1-0-0' },
    { title: '0-1-0-1', key: '0-1-0-1' },
    { title: '0-1-0-2', key: '0-1-0-2' },
  ],
}, {
  title: '0-2',
  key: '0-2',
}];

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedKeys: ['0-0-0'],
      autoExpandParent: true,
      checkedKeys: ['0-0-0-0'],
      checkedNodes: [],
      selectedKeys: ['0-0-0-1'],
      searchData: ''
    }
  }
  //展开树时
  onExpand = (expandedKeys) => {
    console.log('onExpand', arguments);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }
  // 点击节点复选框时
  onCheck = (checkedKeys, e) => {
    console.log('onCheck', e);
    const checkedNodes = e.checkedNodes;
    this.setState({ checkedKeys, checkedNodes });
  }
  // 点击某节点时
  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  }
  // 搜索框输入时
  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchData: value
    })
  }
  // 点击搜索或按下回车键时的回调
  onSearch = (e) => {
    console.log(this.state.searchData)
  }
  // 将选中的节点展示在右侧
  outputSelectedNodes(checkedNodes){
    console.log(checkedNodes)
  }
  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
  }
  render() {
    return (
      <div style={{ width: "250px", border: "1px solid #ccc", borderRadius: "5px", padding:"10px" }}>
        <Search placeholder="Search" onChange={this.onChange} onSearch={this.onSearch} />
        <Tree
          checkable
          onExpand={this.onExpand}
          expandedKeys={this.state.expandedKeys}
          autoExpandParent={this.state.autoExpandParent}
          onCheck={this.onCheck}
          checkedKeys={this.state.checkedKeys}
          onSelect={this.onSelect}
          selectedKeys={this.state.selectedKeys}
        >
          {this.renderTreeNodes(treeData)}
        </Tree>
        <Button 
          style={{display:"block",margin: "10px auto"}} 
          onClick={this.outputSelectedNodes.bind(this,this.state.checkedNodes)}>确定</Button>
      </div>
    );
  }
}
