import * as APIUtil from '../util/notebook_api_util';
import {receiveErrors, clearErrors} from './error_actions';

export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const RECEIVE_SINGLE_NOTEBOOK = 'RECEIVE_SINGLE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';
export const RESET_NOTEBOOK = 'RESET_NOTEBOOK';

//sync actions 

export const receiveAllNotebooks = notebooks => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks
});

export const receiveSingleNotebook = notebook => ({
  type: RECEIVE_SINGLE_NOTEBOOK,
  notebook
});

export const removeNotebook = notebook => ({
  type: REMOVE_NOTEBOOK,
  notebook
});

export const resetNotebook = () => ({
  type: RESET_NOTEBOOK, 
  note: null
}); 


//async actions 
export const createNotebook = notebook => dispatch => (
  APIUtil.createNotebook(notebook).then(newNotebook => {
    dispatch(receiveSingleNotebook(newNotebook)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchAllNotebooks = () => dispatch => (
  APIUtil.fetchAllNotebooks().then(notebooks => (
    dispatch(receiveAllNotebooks(notebooks))
  ))
);

export const fetchSingleNotebook = id => dispatch => (
  APIUtil.fetchSingleNotebook(id).then(notebook => (
    dispatch(receiveSingleNotebook(notebook))
  ))
);

export const updateNotebook = notebook => dispatch => (
  APIUtil.updateNotebook(notebook).then(newNotebook => 
    dispatch(receiveSingleNotebook(newNotebook)))
);

export const deleteNotebook = notebook => dispatch => (
  APIUtil.deleteNotebook(notebook).then(newNotebook => 
    dispatch(removeNotebook(newNotebook)))
);





