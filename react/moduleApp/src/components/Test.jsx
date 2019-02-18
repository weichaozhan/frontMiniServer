import React from 'react'
import {withRouter} from "react-router-dom";

import '../styles/test.less';

class Test extends React.Component {
  constructor() {
		super()
		
    this.state = {
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <div className="moduleAPP-test-bg"></div>
        <span className="moduleAPP-text">Test Text</span>
      </div>
    )
  }
}

export default withRouter(Test)