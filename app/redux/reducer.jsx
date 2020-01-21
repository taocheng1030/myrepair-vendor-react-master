
import * as types from './actionTypes';

const initialState = {
  status: null,
};

export default function common(state = initialState, action = {}) {

  switch (action.type) {
    case types.LOGIN_STATUS:
      return {
        status: types.LOGIN_STATUS,
        order: action.order
    };

    default:
      return state;
  }
}
