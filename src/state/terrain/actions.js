import { TerrainAction } from 'state/action-types';

// eslint-disable-next-line import/prefer-default-export
export const setTerrainOptions = (name, value) => ({
  type: TerrainAction.OPTIONS,
  name,
  value,
});
