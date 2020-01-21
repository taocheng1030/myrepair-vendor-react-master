import * as types from './actionTypes';

export function loginStatus(value) {
    return dispatch => {
        dispatch({ type: types.LOGIN_STATUS, order:value });
    }
}