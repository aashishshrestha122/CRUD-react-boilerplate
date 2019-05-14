/*
 *
 * Gettestimonial reducer
 *
 */
// import produce from 'immer';
import * as types from './constants';

export const initialState = {
  deleteResponse: '',
  deleteError: '',
  dataList: []
};

/* eslint-disable default-case, no-param-reassign */
const gettestimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REQUEST: {
      return { state };
    }
    case types.GET_SUCCESS: {
      // console.log(action);
      // console.log("IIII", action.response);
      const dataList = action.response.dataList;
      return { dataList};
    }
    case types.GET_FAILURE: {
      // debugger;
      return { ...state };
    }
    case types.DEL_REQUEST: {
      return { state };
    }
    case types.DEL_SUCCESS: {
      // console.log(action.response.message);
      return { deleteResponse: action.response };
    }
    case types.DEL_FAILURE: {
      return { deleteError: action.error.message };
    }
    default:
      return state;
  }
};

export default gettestimonialReducer;
