import React, { useEffect, useState } from "react";
import app from "./Base.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Providervalue={{
            currentuser
        }}
        >
            {children}
        </AuthContext.Providervalue>
    );
};