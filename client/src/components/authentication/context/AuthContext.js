import React, { useContext, useState, useEffect } from 'react'
import app from '../fireBase'
// import firebase from 'firebase'
// import provider from '../fireBase'
// import { auth } from "../Base"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)

    function signup(email, password) {
        return app.auth().createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return app.auth().signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return app.auth().signOut()
    }

    function resetPassword(email) {
        return app.auth().sendPasswordResetEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function updateUser(firstName, lastName) {
        // function updateUser(givenName) {
        const givenName = `${firstName} ${lastName}`
        return app.auth().currentUser.updateProfile({
            displayName: givenName
        })

    }

    function googleSignInPopup(provider) {
        console.log("started");
        // var provider = new app.auth.GoogleAuthProvider();
        return app.auth().signInWithPopup(provider)
        app.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    useEffect(() => {
        const unsubscribe = app.auth().onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
            setLoggedIn(true)

        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updatePassword,
        updateUser,
        googleSignInPopup
    }
    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}
