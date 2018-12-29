import React from 'react'
import { Switch, Route } from 'react-router-dom'
import path from 'path'

console.log(path)

import asyncComponent from '../tools/asyncComponent'

const Test = asyncComponent('../components/Test.jsx')

const Router = () => (
	<Switch>
		<Route path="/test" component={Test} />
	</Switch>
)

export default Router