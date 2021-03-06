import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) => {
	return {
		type: RECEIVE_CURRENT_USER,
		user
	};
};

export const logoutCurrentUser = () => {
	return {
		type: LOGOUT_CURRENT_USER
	};
};

export const receiveSessionErrors = (errors) => {
	return {
		type: RECEIVE_SESSION_ERRORS,
		errors: errors.responseJSON
	};
};

export const login = user => dipatch => {
	return SessionAPIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors))
  );
};

export const logout = () => dispatch => {
	return SessionAPIUtil.logout().then((user) => dispatch(logoutCurrentUser()));
};

export const signup = user => dispatch => {
	return SessionAPIUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors))
  );
};
