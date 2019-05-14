/*
 *
 * Testimonial reducer
 *
 */
import {
  POST_REQUEST,
  POST_SUCCESS,
  POST_ERROR,
  GET_DATA_BY_ID_REQUEST,
  GET_DATA_BY_ID_SUCCESS,
  GET_DATA_BY_ID_FAILURE,
  PUT_REQUEST,
  PUT_SUCCESS,
  PUT_ERROR,
} from './constants';

export const initialState = {
  data: [],
  testimonialByIdData: {},
};

const postContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST: {
      return { ...state };
    }
    case POST_SUCCESS: {
      return { action };
    }
    case POST_ERROR: {
      return { ...state };
    }
    case GET_DATA_BY_ID_REQUEST: {
      return { state };
    }
    case GET_DATA_BY_ID_SUCCESS: {
      // console.log(action.res.data);
      return { testimonialByIdData: action.response };
    }
    case GET_DATA_BY_ID_FAILURE: {
      return { ...state };
    }
    case PUT_REQUEST: {
      return { ...state };
    }
    case PUT_SUCCESS: {
      return { action };
    }
    case PUT_ERROR: {
      return { ...state };
    }
    default:
      return state;
  }
};
export default postContainerReducer;
