import React from 'react';
import {Table, Button} from 'antd';
import '../pageStyles/TableSheets.css';

class TableDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columnsData: [
        // {title: 'Full Name', dataIndex: 'name', key: 'name'},
        // {title: 'Age', dataIndex: 'age', key: 'age',},
        {title: 'Column 4', dataIndex: 'address', key: '1'},
        {title: 'Column 4', dataIndex: 'address', key: '2'},
        {title: 'Column 4', dataIndex: 'address', key: '3'},
        {title: 'Column 4', dataIndex: 'address', key: '4'},
        {title: 'Column 4', dataIndex: 'address', key: '5'},
        {title: 'Column 4', dataIndex: 'address', key: '6'},
        {title: 'Column 4', dataIndex: 'address', key: '7'},
        {
          title: 'Action',
          key: 'operation',
          // fixed: 'right',
          render: () => <a>action</a>,
        },
      ],
      dataSourceData: [],
      pagination: {
        pageSize: 10,
        current: 1,
        total: 0,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50', '100'],
      }
    }
  }

  setTableData = () => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park No. ${i}`,
      });
    }
    this.setState({
      dataSourceData: data
    })
  }

  render() {
    return (
      <div style={{width:'95%'}}>
        <Button onClick={this.setTableData}>点击后setState（设置表格数据）</Button>
        <Table
          dataSource={this.state.dataSourceData}
          columns={this.state.columnsData}
          scroll={{x: true}}
          // scroll={{x: 100, y: 300}}
          locale={{'emptyText':'暂无数据'}}
        />
      </div>
    )
  }
}

export default TableDemo
