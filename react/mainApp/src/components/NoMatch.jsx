import React from 'react';
import {withRouter} from "react-router-dom";

class Test extends React.Component {
  constructor() {
		super();
		
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="ttt">
        <span>No Match</span>
      </div>
    )
  }
}

export default withRouter(Test);