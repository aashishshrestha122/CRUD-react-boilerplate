import { put, takeLatest, all, call, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from '../../../utils/apiHelper';
// import API

function* Req() {
  let token = localStorage.getItem('token');
  yield fork(
    XcelTrip.get(`testimonial`, actions.getSuccess, actions.getFailure),
  );
}

function* Del(action) {
  const id = action.id;
  const token = localStorage.getItem('token');
  console.log(id,token);
  yield fork(
    XcelTrip.patch(
      `testimonial/${id}`,
      actions.deleteSuccess,
      actions.deleteFailure,
      {},
      token,
    ),
  );
}

function* actionWatcher() {
  yield takeLatest(types.GET_REQUEST, Req);
  yield takeLatest(types.DEL_REQUEST, Del);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
