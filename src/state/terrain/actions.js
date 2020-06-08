import { TerrainAction } from 'state/action-types';

export const setTerrainOptions = (name, value) => ({
  type: TerrainAction.OPTIONS,
  name,
  value,
});

export const resetTerrainOptions = () => ({
  type: TerrainAction.RESET_OPTIONS,
});
