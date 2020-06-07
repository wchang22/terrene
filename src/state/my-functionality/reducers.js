import update from 'immutability-helper';

import { MyAction } from 'state/action-types';

const initialState = {
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case MyAction.ACTION:
      return update(state, {

      });
    default:
      return state;
  }
};

export default myReducer;
