import { RECEIVE_ALL_NOTEBOOKS, RECEIVE_SINGLE_NOTEBOOK, REMOVE_NOTEBOOK} from '../actions/notebook_actions';
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
  		return merge({}, state, {entities: action.notebooks});
  	case RECEIVE_SINGLE_NOTEBOOK: 
  		const newNotebook = {[action.notebook.id]: action.notebook};
  		return merge({}, state, {entities: newNotebook});
  	case REMOVE_NOTEBOOK: 
  		nextState = merge({}, state);
  		delete nextState.entities[action.notebook.id];
  		return nextState;
    default:
      return state;
  }
};

export default NotebookReducer;
