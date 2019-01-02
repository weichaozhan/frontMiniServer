import React, { Component } from "react";

export default function asyncComponent(componentImport) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
			const C = await componentImport

      this.setState({
        component: C.default
      });

    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}