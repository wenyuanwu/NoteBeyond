import { RECEIVE_ALL_NOTES, RECEIVE_SINGLE_NOTE, REMOVE_NOTE, RESET_NOTES, UPDATE_CURRENT_NOTE} from '../actions/note_actions';
import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions'; 
import merge from 'lodash/merge';

const nullNote = Object.freeze({
  entities: {},
  errors: [],
  currentNote: null
});

const NoteReducer = (state = nullNote, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_ALL_NOTES:
      const newNotes = action.notes;
      if (state.currentNote){
          return merge({}, state, { entities: newNotes});  
      } else{
          return merge({}, state, { entities: newNotes, currentNote: newNotes[Object.keys(newNotes)[0]]});
        }
    case RECEIVE_SINGLE_NOTE:
      const newNote = {[action.note.id]: action.note};
      return merge({}, state, {entities: newNote, currentNote: action.note});
    case REMOVE_NOTE:
      nextState = merge({}, state);
      delete nextState.entities[action.note.id];
      nextState.currentNote= null;
      return nextState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullNote, {errors});
    case RESET_NOTES:
      nextState = nullNote;
      return nextState;  
    case UPDATE_CURRENT_NOTE: 
      nextState = action.note;
      return merge({}, state, {currentNote: nextState});
    default:
      return state;
  }
};

export default NoteReducer;