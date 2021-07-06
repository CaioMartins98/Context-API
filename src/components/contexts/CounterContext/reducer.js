import * as actionTypes from './action-types';
import { initialState } from '.';

export const reducer = (state, action) => {
  console.log('action', action);

  switch (action.type) {
    case actionTypes.INCREASE:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREASE:
      return { ...state, count: state.count - 1 };
    case actionTypes.RESET:
      return { ...initialState };
    case actionTypes.SET_COUNTER:
      return { ...state, ...action.payload };
    case actionTypes.ASYNC_INCREASE_START:
      return { ...state, loading: true };
    case actionTypes.ASYNC_INCREASE_END:
      return { ...state, loading: false, count: state.count + 1 };
    case actionTypes.ASYNC_INCREASE_ERROR:
      return { ...state, loading: false };

    default:
      break;
  }

  return state;
};
