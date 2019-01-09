import {
  TEST_DO,
} from '../actions/testActions.js';

const initialState = {
  data: 'Initail Data',
  subData: 'test init',
};

const testReducer = (state = initialState, action) => {
  switch(action.type) {
    case TEST_DO:
      return Object.assign({}, state, {
        subData: action.text,
      });

    default: 
      return state;
  }
};

export default testReducer;