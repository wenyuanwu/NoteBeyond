import * as APIUtil from '../util/note_api_util';
import {receiveErrors, clearErrors} from './error_actions';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_SINGLE_NOTE = 'RECEIVE_SINGLE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';


//sync actions 

export const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const receiveSingleNote = note => ({
  type: RECEIVE_SINGLE_NOTE,
  note
});

export const removeNote = note => ({
  type: REMOVE_NOTE,
  note
});

//async actions 
export const createNote = note => dispatch => (
  APIUtil.createNote(note).then(new_note => {
    dispatch(receiveSingleNote(new_note)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchAllNotes = () => dispatch => (
  APIUtil.fetchAllNotes().then(notes => (
    dispatch(receiveAllNotes(notes))
  ))
);

export const fetchSingleNote = id => dispatch => (
  APIUtil.fetchSingleNote(id).then(note => (
    dispatch(receiveSingleNote(note))
  ))
);

export const updateNote = note => dispatch => (
  APIUtil.updateNote(note).then(new_note => dispatch(receiveSingleNote(new_note)))
);

export const deleteNote = note => dispatch => (
  APIUtil.deleteNote(note).then(new_note => dispatch(removeNote(new_note)))
);



