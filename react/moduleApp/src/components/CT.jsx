import React from 'react'
import {withRouter} from "react-router-dom";
import Img from '../assets/img/flyPig.jpg';

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
        <span>Test CT</span>
        <div>
          <img width="180" src={Img}/>
        </div>
      </div>
    )
  }
}

export default withRouter(Test)