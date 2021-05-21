import React from "react";
import app from "../authentication/Base";

function Logout() {
    return (
        <>
        <h1>Home</h1>
        <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </>
    );
};

export default Logout;