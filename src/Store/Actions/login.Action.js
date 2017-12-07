export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const login = () => ({
    type: LOGIN,
});

export const loginSuccess = (value) => ({
    type: LOGIN_SUCCESS,
    payload: value
});

export const loginfailed = (value) => ({
    type: LOGIN_FAILED,
    payload: value
}) 
