import {lazy} from 'react'

import Index from '../components/Index.jsx';

let appData = window.appData = window.appData || {}

appData.routes = (appData.routes || []).concat([
	{
		code:'/module',    
		path: '/module',
		component: Index,
	}
])