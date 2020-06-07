import React, { memo } from 'react';
import { Drawer } from '@material-ui/core';

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
    />
  );
};

export default memo(SideDrawer);
