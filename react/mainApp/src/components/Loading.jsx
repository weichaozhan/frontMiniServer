import React from 'react'
import { withRouter } from 'react-router-dom';

class Loading extends React.Component {
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
        <span>loading</span>
      </div>
    )
  }
}

export default withRouter(Loading)