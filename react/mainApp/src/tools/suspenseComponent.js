import React, { Component, Suspense } from "react"

export default function suspenseComponent(ComponentImport) {
  class SuspenseComponent extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <ComponentImport {...this.props} />
        </Suspense>
      )
    }
  }

  return SuspenseComponent
}