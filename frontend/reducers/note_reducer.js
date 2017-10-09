import { RECEIVE_ALL_NOTES, REMOVE_NOTE, UPDATE_CURRENT_NOTE, UPDATE_NOTE_ENTITIES, UPDATE_CURRENT_NOTEBOOK} from '../actions/note_actions';
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

    case REMOVE_NOTE:
      nextState = merge({}, state);
      delete nextState.entities[action.note.id];
      nextState.currentNote= null;
      return nextState;

    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullNote, {errors});

    case UPDATE_CURRENT_NOTE: 
      let newState = Object.assign({}, state);
      newState.entities[action.note.id] = action.note;
      newState.currentNote = action.note;
      return newState;

    case UPDATE_CURRENT_NOTEBOOK:
      let newNoteBook_id = action.notebook_id;
      // let prev_notebook = nextState.currentNote.notebook_id;
      // let new_note_ids = [];
      
      // prev_notebook.note_ids.forEach(function(note_id){
      //   if (note_id !== action.note_id){
      //     new_note_ids.push(note_id);
      //   }
      // });
      // prev_notebook.note_ids = new_note_ids;
      // notebook = nextState.entities[action.notebook_id];
      // notebook.note_ids.push(action.note_id);
      newState = merge({}, state, {currentNote: {notebook_id: newNoteBook_id}});
      return newState;

    case UPDATE_NOTE_ENTITIES:
      let notes = action.notes;
      let nextState = {};
      notes.forEach(note => nextState[note.id] = note);
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