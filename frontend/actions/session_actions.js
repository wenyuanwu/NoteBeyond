import * as APIUtil from "../util/session_api_util";
import {receiveErrors} from "./error_actions";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
	type: RECEIVE_CURRENT_USER,
	currentUser
});

export const signup = user => dispatch => (
	APIUtil.signup(user).then(u => (
		dispatch(receiveCurrentUser(u))
	), err => (
		dispatch(receiveErrors(err.responseJSON))
	))
);

export const login = user => dispatch => (
	APIUtil.login(user).then(u => (
		dispatch(receiveCurrentUser(u))
	), err => (
		dispatch(receiveErrors(err.responseJSON))
	))
);

export const logout = () => dispatch => (
	APIUtil.logout().then(() => (
		dispatch(receiveCurrentUser(null))
	))
);