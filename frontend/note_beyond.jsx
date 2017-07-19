import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, signup} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  // window.store = store;
  // window.login = login;
  // window.signup = signup;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch; // just for testing!
  ReactDOM.render(<Root store={store} />, root);
});

