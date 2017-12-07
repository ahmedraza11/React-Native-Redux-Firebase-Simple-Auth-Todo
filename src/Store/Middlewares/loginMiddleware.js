import * as firebase from 'firebase';
import { login, loginSuccess, loginfailed } from '../Actions/login.Action';

export class LoginMiddleware {
    static login(cred, navigate) {
        return (dispatch) => {
            dispatch(login());
            LoginMiddleware.authenticateOnFirebase(dispatch, cred, navigate);
        }
    }
    static authenticateOnFirebase(dispatch, cred, navigate) {
        firebase.auth().signInWithEmailAndPassword(cred.email, cred.password)
            .then((auth) => {
                console.log("Userlogeddin", auth);
                LoginMiddleware.FetchUserFromFirebase(dispatch, cred, auth, navigate);

            }).catch((err) => {
                console.log("Registeration Failed", err);
                alert("Login Failed", err);
                dispatch(loginfailed(err));
            })
    }
    static FetchUserFromFirebase(dispatch, cred, auth, navigate) {
        firebase.database().ref('/').child(`users/${auth.uid}`).on('value', (snapShot) => {
            dispatch(loginSuccess(snapShot.val()));
            navigate('HomeScreen');
        })
    }
}