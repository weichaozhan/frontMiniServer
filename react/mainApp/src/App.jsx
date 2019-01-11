import React from 'react';
import { Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router from './router/Index.jsx';
import { Button } from 'antd';

import rootRedeucer from './store/index';

const store = createStore(rootRedeucer);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="content-show">
          <Router/>
        </div>
      </Provider>
    );
  }
};

export default App;