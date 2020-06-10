import { WaterAction } from 'state/action-types';

export const setWaterOptions = (name, value) => ({
  type: WaterAction.OPTIONS,
  name,
  value,
});

export const resetWaterOptions = () => ({
  type: WaterAction.RESET_OPTIONS,
});
