import React from 'react'
import { Switch, Route } from 'react-router-dom'

import asyncComponent from '../tools/asyncComponent'

const Test = asyncComponent(import('../components/Test.jsx'))

const Router = () => (
	<Switch>
		<Route path="/test" component={Test} />
	</Switch>
)

export default Router