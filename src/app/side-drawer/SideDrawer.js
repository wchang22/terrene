import React, { useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import ListSection from 'app/side-drawer/list-section';
import { resetFogOptions, setFogOptions } from 'state/fog/actions';
import { resetTerrainOptions, setTerrainOptions } from 'state/terrain/actions';
import { resetWaterOptions, setWaterOptions } from 'state/water/actions';
import { getFogOptions } from 'state/fog/selectors';
import { getTerrainOptions } from 'state/terrain/selectors';
import { getWaterOptions } from 'state/water/selectors';
import { FogOptions, TerrainOptions, WaterOptions } from 'app/side-drawer/options';

import useStyles from './styles';

// Side panel on left
const SideDrawer = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(resetFogOptions());
    dispatch(resetTerrainOptions());
    dispatch(resetWaterOptions());
  };

  const terrainOptions = useSelector(getTerrainOptions);
  const fogOptions = useSelector(getFogOptions);
  const waterOptions = useSelector(getWaterOptions);

  const fogSetOptions = useCallback((name, value) => dispatch(
    setFogOptions(name, value),
  ), [dispatch]);

  const terrainSetOptions = useCallback((name, value) => dispatch(
    setTerrainOptions(name, value),
  ), [dispatch]);

  const waterSetOptions = useCallback((name, value) => dispatch(
    setWaterOptions(name, value),
  ), [dispatch]);

  return (
    <Drawer
      className={styles.sideDrawer}
      variant="permanent"
      classes={{
        paper: styles.sideDrawer,
      }}
    >
      <List className={styles.list}>
        <Box className={styles.options}>
          <ListSection
            sectionName="Fog"
            optionsEnum={FogOptions}
            options={fogOptions}
            setOptions={fogSetOptions}
          />
          <ListSection
            sectionName="Terrain"
            optionsEnum={TerrainOptions}
            options={terrainOptions}
            setOptions={terrainSetOptions}
          />
          <ListSection
            sectionName="Water"
            optionsEnum={WaterOptions}
            options={waterOptions}
            setOptions={waterSetOptions}
          />
        </Box>
        <ListItem
          button
          dense
          onClick={resetAll}
        >
          <ListItemText
            primary="Reset all"
            classes={{
              primary: styles.resetButton,
            }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default memo(SideDrawer);
