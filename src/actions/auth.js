import { firebase, googleAuthProvider, microsoftAuthProvider } from '../firebase/firebase';

export const login = (uid) => (
    {
        type: "LOGIN",
        uid
    }
);

export const startLoginWithGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLoginWithMicrosoft = () => {
    return () => {
        return firebase.auth().signInWithPopup(microsoftAuthProvider);
        
    };
};

export const logout = () => (
    {
        type: "LOGOUT"
    }
);

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}