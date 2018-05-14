import React from 'react';
import { Tree, Input } from 'antd';
import { runInAction } from 'mobx';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const dataList = [];
const dataTree = [
  {
    "key": "3c1598311f4842079a24ce61e155575f",
    "id": "3c1598311f4842079a24ce61e155575f",
    "name": "菜单管理",
    "type": 1,//1是菜单,2是按钮
    "pid": "0", //父节点id, 0代表根
    "pids": "0",//所有父节点id, 逗号分隔
    "sort": 1,//顺序
    "children": [
      {
        "key": "de955e0ce79e40ecaf91f794def7b264",
        "id": "de955e0ce79e40ecaf91f794def7b264",
        "name": "创建菜单",
        "type": 2,
        "pid": "3c1598311f4842079a24ce61e155575f",
        "pids": "0,3c1598311f4842079a24ce61e155575f",
        "sort": 1,
        "children": null
      }
    ]
  },
  {
    "key": "8b9434104b7b442dac8c3f17fb1eccaa",
    "id": "8b9434104b7b442dac8c3f17fb1eccaa",
    "name": "角色管理",
    "type": 1,
    "pid": "0",
    "pids": "0",
    "sort": 2,
    "children": [
      {
        "key": "32402a925bc2421f87edaeaf3d9156cf",
        "id": "32402a925bc2421f87edaeaf3d9156cf",
        "name": "创建角色",
        "type": 2,
        "pid": "8b9434104b7b442dac8c3f17fb1eccaa",
        "pids": "0,8b9434104b7b442dac8c3f17fb1eccaa",
        "sort": 1,
        "children": null
      },
      {
        "key": "32402a925bc2421f87edaeaf3d9156e6",
        "id": "32402a925bc2421f87edaeaf3d9156e6",
        "name": "创建角色2",
        "type": 2,
        "pid": "8b9434104b7b442dac8c3f17fb1eccaa",
        "pids": "0,8b9434104b7b442dac8c3f17fb1eccaa",
        "sort": 1,
        "children": null
      }
    ]
  },
  {
    "key": "372cc66fbcb34dfb8b64ccf8f571f97b",
    "id": "372cc66fbcb34dfb8b64ccf8f571f97b",
    "name": "用户管理",
    "type": 1,
    "pid": "0",
    "pids": "0",
    "sort": 3,
    "children": [
      {
        "key": "11a7074473564bd49be1505b1d2e7ffc",
        "id": "11a7074473564bd49be1505b1d2e7ffc",
        "name": "创建用户",
        "type": 2,
        "pid": "372cc66fbcb34dfb8b64ccf8f571f97b",
        "pids": "0,372cc66fbcb34dfb8b64ccf8f571f97b",
        "icon": "",
        "sort": 1,
        "children": null
      }
    ]
  }
];

const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    dataList.push({ key, name: node.name });
    if (node.children) {
      generateList(node.children, node.key);

    }
  }
};
generateList(dataTree);
console.log(dataList);

const getParentKey = (key, tree) => {
  let parentKey;
  console.log(key)
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.name === name)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

export default class extends React.Component{
    state = {
        expandedKeys: [],
        searchValue: '',
        autoExpandParent: true,
      }
      onExpand = (expandedKeys) => {
        this.setState({
          expandedKeys,
          autoExpandParent: false,
        });
      }
      onChange = (e) => {
        const value = e.target.value;
        const expandedKeys = dataList.map((item) => {
          //当前name如果能匹配到输入框的值
          if (item.name.indexOf(value) > -1) {
            console.log(getParentKey(item.key, dataList))
            return getParentKey(item.key, dataList);
          }
          return null;
        }).filter((item, i, self) => item && self.indexOf(item) === i);
        this.setState({
          expandedKeys,
          searchValue: value,
          autoExpandParent: true,
        });
      }
      render() {
        const { searchValue, expandedKeys, autoExpandParent } = this.state;
        const loop = data => data.map((item) => {
          const index = item.name.indexOf(searchValue); //获取搜索串在key中的下标
          const beforeStr = item.name.substr(0, index); //截取key中从0到搜索串下标的串
          const afterStr = item.name.substr(index + searchValue.length); //返回搜索串到key结尾的串
          const title = index > -1 ? (
            <span>
              {beforeStr}
              {/* 把搜索串标红 */}
              <span style={{ color: '#f50' }}>{searchValue}</span>
              {afterStr}
            </span>
          ) : <span>{item.name}</span>;
          if (item.children) {
            return (
              <TreeNode key={item.key} title={title}>
                {loop(item.children)}
              </TreeNode>
            );
          }
          return <TreeNode key={item.key} title={title} />;
        });
        return (
          <div style={{ width: "40%", border: "1px solid #ccc", borderRadius: "5px", padding:"10px" }}>
            <Search placeholder="Search" onChange={this.onChange} />
            <Tree
              onExpand={this.onExpand}
              // expandedKeys={["0-0","0-0-0",'0-0-0-0']}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              // defaultExpandedKeys={["0-0","0-0-0",'0-0-0-0']}
            >
              {loop(dataTree)}
            </Tree>
          </div>
        );
      }
}