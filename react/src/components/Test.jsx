import React from 'react'
import {withRouter} from "react-router-dom";

class Test extends React.Component {
  constructor() {
		super()
		
    this.state = {
    }
  }

  componentDidMount() {
    console.log(this.props)
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