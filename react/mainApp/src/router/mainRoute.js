/**
 * 侧边导航路由
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {lazy} from 'react';

import suspenseComponent from '../tools/suspenseComponent';
import RouteModule from './routeModule';

const Home =lazy(() => import('../pages/home/index.jsx'));
const Page1 =lazy(() => import('../pages/page1/index.jsx'));

const routes=[
  {
    path: '/page1',
    component: suspenseComponent(Page1),
  },
  {
    path: '/',
    component: suspenseComponent(Home),
  }
];

class Router extends React.Component {
  render(){
    return <RouteModule routes={routes}/>;
  }
} 

export default Router;