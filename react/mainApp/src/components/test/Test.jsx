import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button, Table } from 'antd';
const { Column } = Table;

import './test.less';
import * as testAction from '@/store/actions/testActions';

class Test extends React.Component {
  static defaultProps = {
    name: 'test',
  }

  static propTypes = {
    name: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
    };

    this.clickAction = this.clickAction.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.dotest('test done');
    }, 3000);
  }

  componentWillUnmount() {
  }

  clickAction(e) {
    const record = JSON.parse(e.currentTarget.dataset.record);
    console.log(record);
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
      phone: 'phone',
    }];
    
    return (
      <div className="wrapper--Test">
        <Button style={{marginBottom: '30px'}}>{this.props.testRedux.subData}</Button>
        <Table scroll={{x:1000, y: 500}} dataSource={data}>
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
        <div className="ttt">
          <p>Test Text</p>
          <span>span text</span>
        </div>
      </div>
    );
  }
}

/**
 * @description action 作为 props 绑定
 * @param {Function} dispatch dispatch
 */
const mapDispatchToProps = (
  dispatch, 
  // ownProps,
) => {
  return {
    dotest: (...args) => dispatch(testAction.dotest(...args)),
  };
};

/**
 * @description 绑定 store 到props
 * @param {Object} state store 
 */
const mapStateToProps = (
  state, 
  // ownProps
) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Test));