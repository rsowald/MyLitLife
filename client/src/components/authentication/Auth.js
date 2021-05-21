import React, { useEffect, useState } from "react";
import app from "./Base";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Providervalue
        value={{
            currentUser
        }}
        >
            {children}
        </AuthContext.Providervalue>
    );
};

export default AuthProvider;