import { FogAction } from 'state/action-types';

export const setFogOptions = (name, value) => ({
  type: FogAction.OPTIONS,
  name,
  value,
});

export const resetFogOptions = () => ({
  type: FogAction.RESET_OPTIONS,
});
