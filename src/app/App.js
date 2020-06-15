import React from 'react';
import { Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import { PerspectiveCamera, Stats } from 'drei';
import PointerLockControls from 'app/pointer-lock-controls';

import SideDrawer from 'app/side-drawer';
import Scene from 'app/scene';
import sceneParams from 'app/scene/params';
import store from 'state/store';

import theme from './theme';
import useStyles from './styles';

const App = () => {
  const styles = useStyles();

  return (
    <Box className={styles.app}>
      <ThemeProvider theme={theme}>
        <SideDrawer />
        <Canvas
          className={styles.canvas}
          gl2
        >
          <Stats className={styles.stats} />
          <Provider store={store}>
            <PointerLockControls
              movementSpeed={sceneParams.camera.movementSpeed}
            />
            <PerspectiveCamera
              position={sceneParams.camera.position}
              makeDefault
            />
            <Scene />
          </Provider>
        </Canvas>
      </ThemeProvider>
    </Box>
  );
};

export default App;
