import { createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import RootReducer from '../reducers/root_reducer';

const logger = createLogger;

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState, 
    composeEnhancers(applyMiddleware(thunk, logger))
  )
);

export default configureStore;