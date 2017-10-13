import { createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { compose } from 'redux';
import RootReducer from '../reducers/root_reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger;
if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  createLogger = require('redux-logger');
}

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState, 
    composeEnhancers(applyMiddleware(thunk, logger))
  )
);

export default configureStore;