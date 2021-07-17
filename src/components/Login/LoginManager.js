import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
}

export const handleSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then(result => {
            const { displayName, email } = result.user;
            const signedInUser = {
                name: displayName,
                email: email,
                success:true
            }
            return signedInUser;

            // ...
        }).catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};

export const handleCreateUserWithEmailAndPassword = (nm,email,password) => {
    return firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserInfo(nm);
            return newUserInfo;
            
        })
        .catch(err => {
            const newUserInfo = {};
            newUserInfo.error = err.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
};
export const handleSignInWithEmailAndPassword = (email,password) =>{
    return firebase.auth().signInWithEmailAndPassword(email,password)
               .then(res => {
                   // Signed in
                   const newUserInfo = res.user;
                   newUserInfo.error = '';
                   newUserInfo.success = true;
                   return newUserInfo;
               })
               .catch(err => {
                   const newUserInfo = {};
                   newUserInfo.error = err.message;
                   newUserInfo.success = false;
                   return newUserInfo;
               })
};

 const updateUserInfo = (name) =>{
    const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        })
        .then(res => {
            console.log('name update')
            
        }).catch((error) => {
            console.log(error.message)
        });
}