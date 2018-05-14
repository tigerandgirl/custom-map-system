import React from 'react';
import { Tree, Input } from 'antd';
import { runInAction } from 'mobx';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const x = 3;
const y = 2;
const z = 1;
const gData = [];
//生成树据
const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;
  // console.log(`preKey：${preKey};tns：${preKey}`)
  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  // console.log(`children：${children}`)
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children, node.key);

    }
  }
};
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    dataList.push({ key, title: key });
    if (node.children) {
      generateList(node.children, node.key);

    }
  }
};
generateList(gData);
console.log(dataList)

const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
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
          if (item.key.indexOf(value) > -1) {
            return getParentKey(item.key, gData);
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
          const index = item.key.indexOf(searchValue); //获取搜索串在key中的下标
          // console.log(`index: ${index}`)
          const beforeStr = item.key.substr(0, index); //截取key中从0到搜索串下标的串
          // console.log(`beforeStr: ${beforeStr}`)
          const afterStr = item.key.substr(index + searchValue.length); //返回搜索串到key结尾的串
          // console.log(`afterStr: ${afterStr}`)
          const title = index > -1 ? (
            <span>
              {beforeStr}
              <span style={{ color: '#f50' }}>{searchValue}</span>
              {afterStr}
            </span>
          ) : <span>{item.key}</span>;
          console.log(`item：${JSON.stringify(item)}`)
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
              {loop(gData)}
            </Tree>
          </div>
        );
      }
}