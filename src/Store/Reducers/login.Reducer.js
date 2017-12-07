import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from './../Actions/login.Action';

const Initial_State = {
    isProccessing: false,
    authUser: {},
    isAuthenticated: false,
    isRegistered: false,
    isError: false,
    errorMessage: {}
}

export const LoginReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isProccessing: true }
        case LOGIN_SUCCESS:
            return { ...state, isProccessing: false, isRegistered: true, isAuthenticated: true, authUser: action.payload }
        case LOGIN_FAILED:
            return { ...state, isProccessing: false, isRegistered: false, isError: true, errorMessage: action.payload }
        default:
            return state;
    }
}   