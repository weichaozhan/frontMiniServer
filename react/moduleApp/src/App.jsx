import React from 'react'

import Router from './router/Index.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
			<div className="content-show">
				I'm App
				<Router/>
			</div>
    )
  }
}

export default App