import { RECEIVE_ALL_NOTES, RECEIVE_SINGLE_NOTE, REMOVE_NOTE, RESET_NOTES, UPDATE_CURRENT_NOTE, UPDATE_NOTE_ENTITIES} from '../actions/note_actions';
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
          return Object.assign({}, state, { entities: newNotes});  
      } else{
          return Object.assign({}, state, { entities: newNotes, currentNote: newNotes[Object.keys(newNotes)[0]]});
        }
    case RECEIVE_SINGLE_NOTE:
      let newNote = {[action.note.id]: action.note};
      let tags = action.note.tags;
      let newState = merge({}, state, {entities: newNote, currentNote: action.note});
      newState.currentNote.tags = tags;
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
      newNote = {[action.note.id]: action.note};
      tags = action.note.tags;
      newState = merge({}, state, {entities: newNote, currentNote: action.note});
      newState.currentNote.tags = tags;
      return newState;
    case UPDATE_NOTE_ENTITIES:
      nextState = action.notes;
      if(nextState.length === 0){
        return nullNote;
      } else{
        return Object.assign({}, state, {entities: nextState, currentNote: nextState[Object.keys(nextState)[0]]});
      }  
    default:
      return state;
  }
};

export default NoteReducer;