import { put, takeLatest, all, fork, call } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from 'utils/apiHelper';

function* Req(action) {
  // console.log(action);
  const token = localStorage.getItem('token');
  // const form_Data = new FormData();
  // form_Data.append('personName', action.data.personName);
  // form_Data.append('testimonialContent', action.data.testimonialContent);
  // form_Data.append('organization', action.data.organization);
  const data = {
    personName: action.data.personName,
    testimonialContent: action.data.testimonialContent,
    organization: action.data.organization,
  };
  yield fork(
    XcelTrip.post(
      `testimonial`,
      actions.postSuccess,
      actions.postError,
      data,
      token,
    ),
  );
}
function* getDataByIdRequest(action) {
  const { id } = action;
  const token = localStorage.getItem('token');

  yield fork(
    XcelTrip.get(
      `testimonial/${id}`,
      actions.getDataByIdSuccess,
      actions.getDataByIdFailure,
      token,
    ),
  );
}

function* putReq(action) {
  const { id } = action;
  console.log(action);
  const token = localStorage.getItem('token');
  const data = {
    personName: action.data.personName,
    testimonialContent: action.data.testimonialContent,
    organization: action.data.organization,
  };
  yield fork(
    XcelTrip.put(
      `testimonial/${id}`,
      actions.putSuccess,
      actions.putError,
      data,
      token,
    ),
  );
}
// function* putReq(action) {
//   try {
//     const { id } = action;
//     console.log(action.file);
//     const form_Data = new FormData();
//     // form_Data.append('imageName', action.file);
//     form_Data.append('personName', action.data.personName);
//     form_Data.append('testimonialContent', action.data.testimonialContent);
//     form_Data.append('organization', action.data.organization);
//     // form_Data.append('message', action.data.message);
//     console.log('>>>>>>>', form_Data);
//     // for (var key of form_Data.entries()) {
//     //   console.log(key[0] + ', ' + key[1]);
//     // }
//     // let imageName = action.file.name;
//     const content = yield axios({
//       method: 'put',
//       url: `http://localhost:3005/api/testimonial/${id}`,
//       headers: {
//         // 'Content-Type': 'multipart/form-data',
//         Authorization: localStorage.getItem('token'),
//       },
//       imageName: action.file,
//       data: form_Data,
//     });

//     yield put({ type: types.PUT_SUCCESS, json: content });
//   } catch (error) {
//     console.log(error, 'error');
//     // alert('Failed To Post Testimonial');
//   }
// }

function* actionWatcher() {
  yield takeLatest(types.GET_DATA_BY_ID_REQUEST, getDataByIdRequest);
  yield takeLatest(types.POST_REQUEST, Req);
  yield takeLatest(types.PUT_REQUEST, putReq);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
