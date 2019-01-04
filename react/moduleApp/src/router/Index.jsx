import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NoMatch from '../NoMatch.jsx'
import '../components/index.js'

class Router extends React.Component {
	constructor() {
		super()
		this.state = {
			routes: []
		}
	}

	componentWillMount() {
		this.setState({
			routes: window.appData.routes
		})
	}

	render() {

		return (
			<Switch>
				{
					this.state.routes.map(item => {
						return (
							<Route path={item.path} component={item.component} key={item.path} />
						)
					})
				}
				<Route component={NoMatch} />
			</Switch>
		)
	}
} 

export default Router