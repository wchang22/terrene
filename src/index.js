import 'wdyr';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import logger from 'js-logger';

import App from 'app';
import store from 'state/store';

import './index.css';

// Set up logger that prints log level at the beginning of all messages
logger.useDefaults({
  formatter: (messages, context) => {
    messages.unshift(`${context.level.name}`);
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
