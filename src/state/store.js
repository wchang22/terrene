import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';

import terrain from 'state/terrain/reducers';
import fog from 'state/fog/reducers';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  // Log redux updates to console if env var `REACT_APP_REDUX_LOGGER` is set
  if (process.env.REACT_APP_REDUX_LOGGER) {
    const reduxLogger = createLogger({
      duration: true,
      diff: true,
    });
    middlewares.push(reduxLogger);
  }
}

const store = compose(applyMiddleware(...middlewares))(createStore)(
  combineReducers({
    terrain,
    fog,
  }),
);

export default store;
