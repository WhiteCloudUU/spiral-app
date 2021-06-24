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

export const startLoginWithEmailAndPassword = (email, password) => {
    return () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
                console.log(error.code);
                console.log(error.message);
        });
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