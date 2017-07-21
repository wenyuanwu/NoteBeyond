import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {createNote, fetchAllNotes, fetchSingleNote,updateNote,deleteNote} from './actions/note_actions';

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
  // window.createNote = createNote;
  // window.fetchSingleNote = fetchSingleNote;
  // window.fetchAllNotes = fetchAllNotes;
  // window.updateNote = updateNote;
  // window.deleteNote = deleteNote;
  // window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  ReactDOM.render(<Root store={store} />, root);
});

