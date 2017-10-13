import { RECEIVE_ALL_NOTEBOOKS, RECEIVE_SINGLE_NOTEBOOK, REMOVE_NOTEBOOK} from 
	"../actions/notebook_actions";
import { REMOVE_NOTE, UPDATE_CURRENT_NOTE, 
	UPDATE_NOTE_ENTITIES, UPDATE_CURRENT_NOTEBOOK} from "../actions/note_actions";
import {RECEIVE_ERRORS, CLEAR_ERRORS} from "../actions/error_actions"; 
import merge from "lodash/merge";

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
	case REMOVE_NOTE:
		nextState = merge({}, state);
		let notebook = nextState.entities[action.note.notebook_id];
		delete notebook.note_ids[action.note.id];
		return nextState;
	default:
		return state;
	}
};

export default NotebookReducer;
