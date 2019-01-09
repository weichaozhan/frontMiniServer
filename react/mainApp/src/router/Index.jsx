import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {lazy} from 'react';

import suspenseComponent from '../tools/suspenseComponent';
// import asyncComponent from '../tools/asyncComponent';
import routes from './routes.js';

class Router extends React.Component {
  constructor() {
    super();
    this.state = {
      routes: [],
      modulesLoaded: [],
      isLoading: false,
    };
  }

  componentWillMount() {
    this.load();
    window.appData = window.appData ? Object.assign(window.appData, {routes}) : {
      routes,
    };
    this.setState({
      routes: window.appData.routes,
    });
  }

  componentWillReceiveProps() {
    this.load();
  }

  /**
   * @description 下载模块代码
   */
  load() {
    if (!window.appData || !window.appData.modules) return;

    const appModules = window.appData.modules;
    const moduleKeys = Object.keys(appModules);
    const module = location.pathname.split('/')[1];
    
    moduleKeys.some(item => {
      const { modulesLoaded } = this.state;
      const regexp = new RegExp(`^${item}`);
      const isMatch = regexp.test(module);
      
      // 路由开头是否匹配某个模块
      if (isMatch) {
        // 模块是否已经下载
        if (modulesLoaded.indexOf(item) < 0) {
          this.setState({isLoading: true});
          const pl = appModules[item].map(item => {
            return new Promise((resolve, reject) => {
              const node = document.createElement('script');
    
              node.setAttribute('src', item);
              document.body.appendChild(node);
    
              node.onload = () => {
                resolve();
              };
            });
          });

          Promise.all(pl)
            .then(() => {
              modulesLoaded.push(item);
                
              this.setState({
                modulesLoaded: modulesLoaded,
                routes: window.appData.routes,
                isLoading: false,
              });
            });
        }
      }

      return isMatch;
    });
  }

  render() {
    const isLoading = this.state.isLoading;
  
    return (
      <Switch>
        <Route path="/" exact component={suspenseComponent(lazy(() => import(/* webpackPrefetch: true */'../components/test/Test.jsx')))} />
        {
          this.state.routes.map(item => {
            return (
              <Route path={item.path} component={item.component} key={item.path} />
            );
          })
        }
        {
          isLoading ?
            <Route component={suspenseComponent(lazy(() => import(/* webpackPrefetch: true */'../components/Loading.jsx')))} />
            :
            <Route component={suspenseComponent(lazy(() => import(/* webpackPrefetch: true */'../components/NoMatch.jsx')))} />
        }
        {/* <Route path="/" exact component={asyncComponent(() => import('../components/Test.jsx'))} />
        {
          this.state.routes.map(item => {
            return (
              <Route path={item.path} component={item.component} key={item.path} />
            )
          })
        }
        {
          isLoading ?
          <Route component={asyncComponent(() => import('../components/Loading.jsx'))} />
          :
          <Route component={asyncComponent(() => import('../components/NoMatch.jsx'))} />
        } */}
      </Switch>
    );
  }
} 

export default Router;