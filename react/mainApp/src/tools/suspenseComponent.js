import React, { Component, Suspense } from 'react';
import Loading from '../components/Loading.jsx';

export default function suspenseComponent(ComponentImport) {
  class SuspenseComponent extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Suspense fallback={<Loading />}>
          <ComponentImport {...this.props} />
        </Suspense>
      )
    }
  }

  return SuspenseComponent;
};