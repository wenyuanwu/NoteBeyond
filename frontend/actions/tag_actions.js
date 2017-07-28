import * as APIUtil from '../util/tag_api_util';
import {receiveErrors, clearErrors} from './error_actions';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';
export const RECEIVE_SINGLE_TAG = 'RECEIVE_SINGLE_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';


//sync actions 

export const receiveAllTags = tags => ({
  type: RECEIVE_ALL_TAGS,
  tags
});

export const receiveSingleTag = tag => ({
  type: RECEIVE_SINGLE_TAG,
  tag
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});


//async actions 
export const createTag = tag => dispatch => (
  APIUtil.createTag(tag).then(new_tag => {
    dispatch(receiveSingleTag(new_tag)); dispatch(clearErrors());},
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchAllTags = () => dispatch => (
  APIUtil.fetchAllTags().then(tags => (
    dispatch(receiveAllTags(tags))
  ))
);

export const fetchSingleTag = id => dispatch => (
  APIUtil.fetchSingleTag(id).then(tag => (
    dispatch(receiveSingleTag(tag))
  ))
);

export const updateTag = tag => dispatch => (
  APIUtil.updateTag(tag).then(new_tag => dispatch(receiveSingleTag(new_tag)))
);

export const deleteTag = tag => dispatch => (
  APIUtil.deleteTag(tag).then(new_tag => dispatch(removeTag(new_tag)))
);




