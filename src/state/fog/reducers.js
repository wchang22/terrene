import update from 'immutability-helper';

import { FogAction } from 'state/action-types';
import sceneParams from 'app/scene/params';
import { FogOptions } from 'app/side-drawer/options';

const initialState = {
  options: {},
};

FogOptions.forEach(({ name }) => {
  initialState.options[name] = sceneParams.fog[name];
});

const terrain = (state = initialState, action) => {
  switch (action.type) {
    case FogAction.OPTIONS:
      return update(state, {
        options: {
          [action.name]: { $set: action.value },
        },
      });
    case FogAction.RESET_OPTIONS:
      return {
        ...state,
        options: initialState.options,
      };
    default:
      return state;
  }
};

export default terrain;
