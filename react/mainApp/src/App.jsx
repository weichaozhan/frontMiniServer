import React from 'react'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'

import Router from './router/Index.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
			<div className="content-show">
				I'm App
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