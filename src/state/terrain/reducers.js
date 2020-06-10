import update from 'immutability-helper';

import { TerrainAction } from 'state/action-types';
import sceneParams from 'app/scene/params';
import { TerrainOptions } from 'app/side-drawer/options';

const initialState = {
  options: {},
};

TerrainOptions.forEach(({ name }) => {
  initialState.options[name] = sceneParams.terrain.uniforms[name];
});

const terrain = (state = initialState, action) => {
  switch (action.type) {
    case TerrainAction.OPTIONS:
      return update(state, {
        options: {
          [action.name]: { $set: action.value },
        },
      });
    case TerrainAction.RESET_OPTIONS:
      return {
        ...state,
        options: initialState.options,
      };
    default:
      return state;
  }
};

export default terrain;
