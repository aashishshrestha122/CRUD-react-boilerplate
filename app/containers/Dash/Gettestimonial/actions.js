/*
 *
 * Gettestimonial actions
 *
 */

import action from '../../../utils/action';
import * as types from './constants';

// console.log('get actions');
// console.log(data);

// export const getRequest = () => ({
//   type: types.GET_REQUEST,
// });
//action accessed from actionhelpers in utils
//  export const getRequest = action(types.GET_REQUEST)
export const getRequest = action(types.GET_REQUEST)
export const getSuccess = action(types.GET_SUCCESS,'response')
export const getFailure = action(types.GET_FAILURE, 'error')
export const deleteRequest = action(types.DEL_REQUEST, 'id')
export const deleteSuccess = action(types.DEL_SUCCESS, 'response')
export const deleteFailure = action(types.DEL_FAILURE,'error')