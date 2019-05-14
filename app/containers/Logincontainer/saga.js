import { takeLatest, call, put, select } from 'redux-saga/effects';
import * as Type from './constants';
import XcelTrip from 'utils/apiHelper.js';
import { loginSuccess, loginError } from './actions';

const apiUri = `login`;

function* loginRequest(action) {
  const data = {
    username: action.userdata.username,
    password: action.userdata.password,
  };
  yield call(XcelTrip.post(apiUri, loginSuccess, loginError, data));
}

// Individual exports for testing
export default function* logInSaga() {
  yield takeLatest(Type.LOGIN_FETCH, loginRequest);
}
