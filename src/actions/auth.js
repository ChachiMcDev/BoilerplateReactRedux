//import { firebase, googleAuthProvider } from '../firebase/firebase';
import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';


export const login = (uid) => ({
    type: 'LOGIN',
    uid
})


export const startLogin = () => {
  
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLoginFacebook = () =>{
    return () =>{
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    }
}


export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut();
    }
}