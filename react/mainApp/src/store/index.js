import { combineReducers } from 'redux';

import testRedux from './reducers/testReducers';

const rootRedeucer = combineReducers({
  testRedux,
})

export default rootRedeucer;