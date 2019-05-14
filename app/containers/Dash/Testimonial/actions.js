/*
 *
 * Testimonial actions
 *
 */

// console.log(data);
import action from 'utils/action';
import * as types from './constants';
console.log('post actions');

// export const postRequest = (data,file) => ({
//   type: POST_REQUEST,
//   data,
//   file
// });

// action accessed from actionhelpers in utils
export const postRequest = action(types.POST_REQUEST, 'data');
export const postSuccess = action(types.POST_SUCCESS,'response');
export const postError = action(types.POST_ERROR,'error');
export const getDataByIdRequest = action(types.GET_DATA_BY_ID_REQUEST, 'id');
export const getDataByIdSuccess = action(types.GET_DATA_BY_ID_SUCCESS, 'response');
export const getDataByIdFailure = action(types.GET_DATA_BY_ID_FAILURE, 'error');
export const putRequest = action(types.PUT_REQUEST, 'data','file','id');
export const putSuccess = action(types.PUT_SUCCESS, 'response');
export const putError = action(types.PUT_ERROR, 'error');

