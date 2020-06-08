import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import TerrainOptions from 'app/side-drawer/terrain-list-section';
import FogOptions from 'app/side-drawer/fog-list-section';
import { resetFogOptions } from 'state/fog/actions';
import { resetTerrainOptions } from 'state/terrain/actions';

import useStyles from './styles';

// Side panel on left
const SideDrawer = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(resetFogOptions());
    dispatch(resetTerrainOptions());
  };

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
          <FogOptions />
          <TerrainOptions />
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
