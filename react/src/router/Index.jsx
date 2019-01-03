import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {lazy} from 'react'

import suspenseComponent from '../tools/suspenseComponent'

const Test = suspenseComponent(lazy(() => import('../components/Test.jsx')))
const CT = suspenseComponent(lazy(() => import('../components/CT.jsx')))

const Router = () => (
	<Switch>
		<Route path="/test" component={Test} />
		<Route path="/ct" component={CT} />
	</Switch>
)

export default Router