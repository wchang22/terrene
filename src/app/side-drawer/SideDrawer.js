import React, { memo } from 'react';
import {
  Drawer,
  List,
} from '@material-ui/core';

import TerrainOptions from 'app/side-drawer/terrain-list-section';

import useStyles from './styles';

// Side panel on left
const SideDrawer = () => {
  const styles = useStyles();

  return (
    <Drawer
      className={styles.sideDrawer}
      variant="permanent"
      classes={{
        paper: styles.sideDrawer,
      }}
    >
      <List>
        <TerrainOptions />
      </List>
    </Drawer>
  );
};

export default memo(SideDrawer);
