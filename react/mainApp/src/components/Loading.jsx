/**
 * 按需加载，加载中效果
 */
import React from 'react';

class Loading extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <span>loading</span>
      </div>
    );
  }
}

export default Loading;