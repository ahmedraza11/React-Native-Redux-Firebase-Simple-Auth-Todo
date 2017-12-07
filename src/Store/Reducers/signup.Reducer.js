import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILED } from '../Actions/signup.Action';

const Initial_State = {
    isProccessing: false,
    authUser: {},
    isAuthenticated: false,
    isRegistered: false,
    isError: false,
    errorMessage: {}
}

export const SignupReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case SIGNUP:
            return { ...state, isProccessing: true }
        case SIGNUP_SUCCESS:
            return { ...state, isProccessing: false, isRegistered: true, authUser: action.payload }
        case SIGNUP_FAILED:
            return { ...state, isProccessing: false, isRegistered: false, isError: true, errorMessage: action.payload }
        default:
            return state;
    }
}