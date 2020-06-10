/*
 * Enums for action types
 * Action type strings should be unique across enums since all reducers
 * are combined
 * Convention: ActionGroup_UNIQUE_LABEL
 */

export const TerrainAction = Object.freeze({
  OPTIONS: 'TerrainAction_OPTIONS',
  RESET_OPTIONS: 'TerrainAction_RESET_OPTIONS',
});

export const FogAction = Object.freeze({
  OPTIONS: 'FogAction_OPTIONS',
  RESET_OPTIONS: 'FogAction_RESET_OPTIONS',
});

export const WaterAction = Object.freeze({
  OPTIONS: 'WaterAction_OPTIONS',
  RESET_OPTIONS: 'WaterAction_RESET_OPTIONS',
});
