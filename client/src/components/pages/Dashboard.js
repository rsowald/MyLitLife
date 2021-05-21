import React from "react";
import app from "../authentication/Base";

function Dashboard() {
    return (
        <>
        <h2>Dashboard</h2>
        <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </>
    );
};

export default Dashboard;