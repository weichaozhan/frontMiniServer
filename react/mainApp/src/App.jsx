import React from 'react'
import { Link } from 'react-router-dom'

import Router from './router/Index.jsx'
import { Button } from 'antd'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
			<div className="content-show">
				<Button style={{margin: '30px'}}>I'm App</Button>
        <p>
          <Link to="/test">test link</Link>
				</p>
        <p>
          <Link to="/module/test">module link</Link>
        </p>
        <Router/>
			</div>
    )
  }
}

export default App