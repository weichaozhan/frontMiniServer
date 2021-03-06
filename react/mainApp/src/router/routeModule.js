/**
 * 路由模板封装
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import {lazy} from 'react';

import suspenseComponent from '../tools/suspenseComponent';

class Router extends React.Component {
  static propTypes = {
    routeType: PropTypes.string, // 是否为顶级路由
  };

  constructor() {
    super();
    this.state = {
      routes: [],
      modulesLoaded: [],
      isLoading: false,
    };
  }

  componentWillMount() {
    if (this.props.routeType === 'top') {
      this.load();
    }

    const {routes}=this.props;
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

  // <Route path="/" exact component={suspenseComponent(lazy(() => import(/* webpackPrefetch: true */'../components/test/Test.jsx')))} />
  render() {
    const isLoading = this.state.isLoading;
    return (
      <Switch>
        { this.state.routes.map(item => (<Route {...item} key={item.path} />)) }
        {
          isLoading ?
            <Route component={suspenseComponent(lazy(() => import(/* webpackPrefetch: true */'../components/Loading.jsx')))} />
            :
            <Route component={suspenseComponent(lazy(() => import(/* webpackPrefetch: true */'../components/NoMatch.jsx')))} />
        }
      </Switch>
    );
  }
} 

export default Router;