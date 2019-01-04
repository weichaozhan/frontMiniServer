import React from 'react'
import { withRouter } from 'react-router-dom';

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
        <span>Test Text</span>
      </div>
    )
  }
}

export default withRouter(Test)