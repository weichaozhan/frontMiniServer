import {lazy} from 'react'

import suspenseComponent from '../tools/suspenseComponent'

let appData = window.appData = window.appData || {}

appData.routes = (appData.routes || []).concat([
	{
		code:'/module',    
		path: '/module',
		component: suspenseComponent(lazy(() => import('../components/Index.jsx')))
	}
])