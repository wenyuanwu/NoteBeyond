import merge from "lodash/merge";

import {
	RECEIVE_CURRENT_USER,
	RECEIVE_ERRORS
} from "../actions/session_actions";

import {
	CLEAR_ERRORS
} from "../actions/error_actions";

const nullUser = Object.freeze({
	currentUser: null,
	errors: []
});

const SessionReducer = (state = nullUser, action) => {
	Object.freeze(state);
	switch(action.type) {
	case RECEIVE_CURRENT_USER:
		const currentUser = action.currentUser;
		return merge({}, nullUser, {
			currentUser
		});
	case RECEIVE_ERRORS:
		let errors = action.errors;
		return merge({}, state, {
			errors
		});
	case CLEAR_ERRORS:
		return Object.assign({}, state, {errors: []});
	default:
		return state;
	}
};

export default SessionReducer;