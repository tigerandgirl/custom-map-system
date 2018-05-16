import React from 'react';
import { Table } from 'antd';
import '../pageStyles/TableSheets.css';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
  ],
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}];

export default class extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  // 分页、排序、筛选变化时触发
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }
  // 点击跳转页面的实现？？？？ 行热点 还是 某一项热点

  // 请求数据
  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    http('GET', 'https://randomuser.me/api', {
      results: 10,
      ...params,
    })
    .then((data) => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    })
    .catch((data) => {
      console.log(data);
    })
  }
  // 首次请求
  componentDidMount() {
    this.fetch();
  }

  render() {
    return (
      <Table 
        columns={columns}
        rowKey={record => record.registered}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
        locale={{'emptyText':'暂无数据'}}
        onRow={(record) => {
          return {
            onClick: () => {
              console.log(record.id);
              // 跳转客户轮廓
              AppHistory.push(`/custom?id=${record.id.value}`);
            }
          };
        }}
      />
    );
  }
}
