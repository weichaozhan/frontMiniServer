import React, { Component } from "react";

export default function asyncComponent(componentImport) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    componentDidMount() {
			import(componentImport)
				.then(module => {
					this.setState({
						component: module.default
					});
				})

    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}