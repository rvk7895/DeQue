import firebaseconfig from './firebaseIndex'
import firebase from 'firebase'

export const authMethods = {
    signUp: (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
            })
            .catch(err => {
                console.error(err)
            })
    },
    signIn: (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user)
            })
            .catch((err) => {
                console.log(err)
            });

    },
    signOut: (email, password) +
}