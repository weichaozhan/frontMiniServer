
/**
 * 路由入口  
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {lazy} from 'react';

import suspenseComponent from '../tools/suspenseComponent';
import routes from '@/router/routes.js';
import RouteModule from './routeModule';

class Router extends React.Component {
  render(){
    return <RouteModule routes={routes} routeType="top"/>;
  }
} 

export default Router;