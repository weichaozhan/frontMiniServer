import React from 'react'
import { withRouter } from 'react-router-dom'

import { Button, Table } from 'antd'
const { Column } = Table

import './test.less'

class Test extends React.Component {
  constructor() {
		super()
    this.state = {
    }

    this.clickAction = this.clickAction.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  clickAction(e) {
    const record = JSON.parse(e.currentTarget.dataset.record) 
    console.log(record)
  }

  render() {
    const data = [{
      key: 111,
      id:1,
      name: 'name',
      html:'html',
      address: 'address',
      test: 'test',
      value: 'value',
      phone: 'phone'
    }]

    return (
      <div>
        <Button>Button</Button>
        <Table 
        scroll={{x:1000, y: 500}}
        dataSource={data}>
          <Column title="id" dataIndex="id"></Column>
          <Column title="key" dataIndex="key"></Column>
          <Column title="name" dataIndex="name" ></Column>
          <Column title="html" dataIndex="html" ></Column>
          <Column title="address" dataIndex="address" ></Column>
          <Column title="test" dataIndex="test" ></Column>
          <Column title="value" dataIndex="value" ></Column>
          <Column title="phone" dataIndex="phone" width="200"></Column>
          <Column title="operation" key="operation" width="100px" fixed="right" render={(text, record) => (
            <a href="javascript:;" onClick={this.clickAction} data-record={JSON.stringify(record)}>action</a>
          )}></Column>
        </Table>
        <p className="ttt">Test Text</p>
      </div>
    )
  }
}

export default withRouter(Test)