import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router from './router/Index.jsx';

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