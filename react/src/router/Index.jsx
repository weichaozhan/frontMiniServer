import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {lazy} from 'react'

import suspenseComponent from '../tools/suspenseComponent'

window.appData = {
	routes: [
		{
			path: '/test',
			component: suspenseComponent(lazy(() => import('../components/Test.jsx')))
		}
	]
}


class Router extends React.Component {
	constructor() {
		super()
		this.state = {
			routes: window.appData.routes,
			a: false,
		}
	}

	componentDidMount() {
		this.load()
	}

	componentWillReceiveProps() {
		this.load()
	}

	load() {
		if (!this.state.a) {
			this.setState({
				a: true
			})
			window.appData.routes.push({
				path: '/ct',
				component: suspenseComponent(lazy(() => import('../components/CT.jsx')))
			})
			setTimeout(() => {
				this.setState({
					routes: window.appData.routes
				})
			}, 1000)
		}
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
			</Switch>
		)
	}
} 

export default Router