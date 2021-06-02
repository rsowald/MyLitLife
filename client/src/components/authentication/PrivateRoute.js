// Imports
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

//Components to render if current user is authenticated
export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser
                    ? <Component {...props} />
                    : <Redirect to="/" />
            }}
        ></Route>
    );
};

