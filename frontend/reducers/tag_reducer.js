import { RECEIVE_ALL_TAGS, RECEIVE_SINGLE_TAG, REMOVE_TAG } from '../actions/tag_actions';
import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions'; 
import merge from 'lodash/merge';

const nullTag = Object.freeze({
  entities: {},
  errors: [],
});

const TagReducer = (state = nullTag, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
  	case RECEIVE_ALL_TAGS:
  		return Object.assign({}, state, {entities: action.tags});
  	case RECEIVE_SINGLE_TAG: 
  		const newTag = {[action.tag.id]: action.tag};
  		return merge({}, state, {entities: newTag});
  	case REMOVE_TAG: 
  		nextState = merge({}, state);
  		delete nextState.entities[action.tag.id];
  		return nextState;
    default:
      return state;
  }
};

export default TagReducer;
