import update from 'immutability-helper';

import { WaterAction } from 'state/action-types';
import sceneParams from 'app/scene/params';
import { WaterOptions } from 'app/side-drawer/options';

const initialState = {
  options: {},
};

WaterOptions.forEach(({ name }) => {
  initialState.options[name] = sceneParams.water.uniforms[name];
});

const water = (state = initialState, action) => {
  switch (action.type) {
    case WaterAction.OPTIONS:
      return update(state, {
        options: {
          [action.name]: { $set: action.value },
        },
      });
    case WaterAction.RESET_OPTIONS:
      return {
        ...state,
        options: initialState.options,
      };
    default:
      return state;
  }
};

export default water;
