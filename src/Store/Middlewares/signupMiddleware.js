import * as firebase from 'firebase';
import { signup, signupSuccess, signupfailed } from '../Actions/signup.Action';

export class SignupMiddleware {
    static signup(cred) {
        return (dispatch) => {
            dispatch(signup());
            SignupMiddleware.registerOnFirebase(dispatch, cred);
        }
    }
    static registerOnFirebase(dispatch, cred) {
        firebase.auth().createUserWithEmailAndPassword(cred.email, cred.password)
            .then((auth) => {
                console.log("UserRegistered", auth);
                SignupMiddleware.createUserInFirebase(dispatch, cred, auth);
            }).catch((err)=>{
                console.log("Registeration Failed", err);
                dispatch(signupfailed(err));                
            })
    }
    static createUserInFirebase(dispatch, cred, auth) {
        let user = {
            uid: auth.uid,
            email: cred.email,
            name: cred.name,
        }
        console.log("Console from createUseronFirebase *****************************", user);
        
        firebase.database().ref('/').child(`users/${user.uid}`).set(user)
            .then(() => {
                dispatch(signupSuccess({name: "Ahmed",Email: "Raza"}));
            }).catch((err)=>{
                console.log("X X X X X User creation on firebase failed",err)
            })
    }
}