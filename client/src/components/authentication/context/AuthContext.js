import React, { useContext, useState, useEffect } from 'react'
import app from '../fireBase'
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
        updateUser
    }
    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}
