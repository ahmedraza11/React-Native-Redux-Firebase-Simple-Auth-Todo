export const SIGNUP = "SIGNUP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";

export const signup = () => ({
    type: SIGNUP,
});

export const signupSuccess = (value) => ({
    type: SIGNUP_SUCCESS,
    payload: value
});

export const signupfailed = (value) => ({
    type: SIGNUP_FAILED,
    payload: value
}) 
