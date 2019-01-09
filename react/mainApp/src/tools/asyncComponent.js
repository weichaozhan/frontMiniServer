/**
 * 懒加载高阶组件
 * exp: asyncComponent(() => import('../components/Test.jsx'))
 */
import React, { Component } from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
			const lazyC = await importComponent();

      this.setState({
        component: lazyC.default,
      });

    }

    render() {
      const LazyC = this.state.component;

      return LazyC ? <LazyC {...this.props} /> : null;
    }
  };

  return AsyncComponent;
}