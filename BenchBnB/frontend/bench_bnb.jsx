import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
import { merge } from 'lodash';
import configureStore from './store/store';
import {login, logout, signup} from './actions/session_actions.js';
import Root from "./components/root";

document.addEventListener('DOMContentLoaded', () => {
	const store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);

	window.getState = store.getState;
	window.dispatch = store.dispatch;
	window.login = login;
	window.logout = logout;
	window.signup = signup;
});
