import React from 'react';
import { Box } from '@material-ui/core';

import useStyles from './styles';

const App = () => {
  const styles = useStyles();

  return <Box className={styles.app}>Hello World!</Box>;
};

export default App;
