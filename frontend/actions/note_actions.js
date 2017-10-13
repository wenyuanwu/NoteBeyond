import * as APIUtil from "../util/note_api_util";
import {receiveErrors, clearErrors} from "./error_actions";

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RESET_NOTES = "RESET_NOTES";
export const UPDATE_CURRENT_NOTE = "UPDATE_CURRENT_NOTE";
export const UPDATE_NOTE_ENTITIES = "UPDATE_NOTE_ENTITIES";
export const UPDATE_CURRENT_NOTEBOOK = "UPDATE_CURRENT_NOTEBOOK";

//sync actions 

export const receiveAllNotes = notes => ({
	type: RECEIVE_ALL_NOTES,
	notes
});

export const removeNote = note => ({
	type: REMOVE_NOTE,
	note
});

export const updateCurrentNote = note => ({
	type: UPDATE_CURRENT_NOTE, 
	note
});

export const updateNoteEntities = notes => ({
	type: UPDATE_NOTE_ENTITIES,
	notes
});

export const updateCurrentNotebook = (notebookId) => ({
	type: UPDATE_CURRENT_NOTEBOOK,
	notebook_id: notebookId,
});

export const resetNotes = () => ({
	type: RESET_NOTES,
});

//async actions 
export const createNote = note => dispatch => (
	APIUtil.createNote(note).then(newNote => {
		dispatch(updateCurrentNote(newNote)); dispatch(clearErrors());},
	err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchAllNotes = () => dispatch => (
	APIUtil.fetchAllNotes().then(notes => (
		dispatch(receiveAllNotes(notes))
	))
);

export const fetchSingleNote = id => dispatch => (
	APIUtil.fetchSingleNote(id).then(note => (
		dispatch(updateCurrentNote(note))
	))
);

export const updateNote = note => dispatch => (
	APIUtil.updateNote(note).then(newNote => 
		dispatch(updateCurrentNote(newNote)))
);

export const deleteNote = note => dispatch => (
	APIUtil.deleteNote(note).then(newNote => dispatch(removeNote(newNote)))
);




