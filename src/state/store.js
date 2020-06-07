import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';

import myReducer from 'state/my-functionality/reducers';

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
    myReducer,
  }),
);

export default store;
