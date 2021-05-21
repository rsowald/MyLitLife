// Imports
import React, { useEffect, useState } from "react";
import app from "./Base";

// Create context propogate data
export const AuthContext = React.createContext();

//Create auth status
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    console.log(AuthProvider);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    //Passing the authprovider through the current user and children
    return (
        <AuthContext.Provider
        value={{
            currentUser
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;