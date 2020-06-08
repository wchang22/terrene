import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ListItem,
  ListItemText,
  ListSubheader,
  Slider,
} from '@material-ui/core';

import TerrainOptions from 'app/side-drawer/terrain-list-section/options';
import { setTerrainOptions } from 'state/terrain/actions';
import { getTerrainOptions } from 'state/terrain/selectors';

import useStyles from './styles';

// Side panel on left
const TerrainListSection = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const terrainOptions = useSelector(getTerrainOptions);

  return (
    <>
      <ListSubheader>Terrain</ListSubheader>
      {
        TerrainOptions.map(({
          displayName,
          name,
          min,
          max,
          step,
        }) => (
          <ListItem dense key={name}>
            <ListItemText className={styles.listItemText}>{ displayName }</ListItemText>
            <Slider
              component="div"
              color="secondary"
              min={min}
              max={max}
              step={step}
              valueLabelDisplay="auto"
              value={terrainOptions[name]}
              onChange={(e, value) => dispatch(setTerrainOptions(name, value))}
            />
          </ListItem>
        ))
      }
    </>
  );
};

export default memo(TerrainListSection);
