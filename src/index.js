import 'wdyr';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'js-logger';
import { WEBGL } from 'three/examples/jsm/WebGL';

import App from 'app';
import store from 'state/store';

import './index.css';

// Set up logger that prints log level at the beginning of all messages
logger.useDefaults({
  formatter: (messages, context) => {
    messages.unshift(`${context.level.name}`);
  },
});

const RootComponent = () => {
  // WebGL 2 is required - fail to load the app if not available
  if (!WEBGL.isWebGL2Available()) {
    return <>{ WEBGL.getWebGL2ErrorMessage().textContent }</>;
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(
  <RootComponent />,
  document.getElementById('root'),
);
