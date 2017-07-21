import { RECEIVE_ALL_NOTES, RECEIVE_SINGLE_NOTE, REMOVE_NOTE} from '../actions/note_actions';
import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions'; 
import merge from 'lodash/merge';

const nullNote = Object.freeze({
  note: {},
  errors: []
});

const NoteReducer = (state = nullNote, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_ALL_NOTES:
      const newNotes = action.notes;
      return merge({}, state, {note: newNotes});
    case RECEIVE_SINGLE_NOTE:
      const newNote = {[action.note.id]: action.note};
      return merge({}, state, {note:newNote});
    case REMOVE_NOTE:
      nextState = merge({}, state);
      delete nextState[action.note.id];
      return nextState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullNote, {
        errors
      });
    default:
      return state;
  }
};

export default NoteReducer;