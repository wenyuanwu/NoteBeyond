import { RECEIVE_ALL_NOTES, REMOVE_NOTE, UPDATE_CURRENT_NOTE, 
	UPDATE_NOTE_ENTITIES, UPDATE_CURRENT_NOTEBOOK, RESET_NOTES} from 
	"../actions/note_actions";
import {RECEIVE_ERRORS} from "../actions/error_actions"; 
import merge from "lodash/merge";

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
			return Object.assign({}, state, 
				{entities: newNotes, 
					currentNote: newNotes[Object.keys(newNotes)[0]]});
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
		if (action.note){
			newState.entities[action.note.id] = action.note;
			newState.currentNote = action.note;}
		return newState;

	case UPDATE_CURRENT_NOTEBOOK:
		let newNoteBookId = action.notebook_id;
		newState = merge({}, state, {currentNote: {notebook_id: newNoteBookId}});
		return newState;

	case UPDATE_NOTE_ENTITIES:
		let notes = action.notes;
		nextState = {};
		notes.forEach(function(note){
			nextState[note.id] = note;});
		if(nextState.length === 0){
			return nullNote;
		} else{
			return Object.assign({}, state, 
				{entities: nextState, 
					currentNote: nextState[Object.keys(nextState)[0]]});
		}   
	case RESET_NOTES:
		nextState = merge({}, state);
		nextState.currentNote = null;
		return nextState;
	default:
		return state;
	}
};

export default NoteReducer;