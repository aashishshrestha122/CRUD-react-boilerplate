/*
 *
 * LogIn reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  loading: false,
  response: '',
  error: '',
  loginResponse: {},
  path: '',
});

function logInReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_FETCH:
      return state;
    case types.LOGIN_SUCCESS:
      localStorage.setItem('token', action.response.token);
      return state.merge({
        loading: true,
        error: null,
        loginResponse: action.response,
        path: '/dash',
      });
    // case T
    default:
      return state;
  }
}

export default logInReducer;
