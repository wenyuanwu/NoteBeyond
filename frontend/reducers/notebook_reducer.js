import { RECEIVE_ALL_NOTEBOOKS, RECEIVE_SINGLE_NOTEBOOK, REMOVE_NOTEBOOK, RESET_NOTEBOOK} from '../actions/notebook_actions';
import { REMOVE_NOTE, UPDATE_CURRENT_NOTE, UPDATE_NOTE_ENTITIES, UPDATE_CURRENT_NOTEBOOK} from '../actions/note_actions';
import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions'; 
import merge from 'lodash/merge';

const nullNotebook = Object.freeze({
  entities: {},
  errors: [],
});

const NotebookReducer = (state = nullNotebook, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
  	case RECEIVE_ALL_NOTEBOOKS:
      let newState = Object.assign({}, state);
      newState.entities = action.notebooks;
  		return newState;
  	case RECEIVE_SINGLE_NOTEBOOK: 
  		const newNotebook = {[action.notebook.id]: action.notebook};
  		return merge({}, state, {entities: newNotebook});
  	case REMOVE_NOTEBOOK: 
  		nextState = merge({}, state);
  		delete nextState.entities[action.notebook.id];
  		return nextState;
    case RESET_NOTEBOOK:
      nextState = nullNotebook;
      return nextState;
    case REMOVE_NOTE:
      nextState = merge({}, state);
      let notebook = nextState.entities[action.note.notebook_id];
      delete notebook.note_ids[action.note.id];
      return nextState;
    // case UPDATE_CURRENT_NOTE:
    //   nextState = merge({}, state);
    //   notebook = nextState.entities[action.note.notebook_id];
    //   let note_id_existed = false;
    //   notebook.note_ids.forEach(function(note_id){
    //     if (note_id === action.note.id){
    //       note_id_existed = true;
    //     }
    //   });
    //   if(!note_id_existed){
    //     notebook.note_ids.push(action.note.id);
    //   }
    //   return nextState;
    // case UPDATE_CURRENT_NOTEBOOK:
      // nextState = merge({}, state);
      // let prev_notebook = nextState.entities[action.prev_notebook_id];
      // let new_note_ids = [];
      // prev_notebook.note_ids.forEach(function(note_id){
      //   if (note_id !== action.note_id){
      //     new_note_ids.push(note_id);
      //   }
      // });
      // prev_notebook.note_ids = new_note_ids;
      // notebook = nextState.entities[action.notebook_id];
      // notebook.note_ids.push(action.note_id);
      // return nextState; 
    default:
      return state;
  }
};

export default NotebookReducer;
