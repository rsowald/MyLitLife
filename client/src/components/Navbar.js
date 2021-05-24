import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link, useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useAuth } from "./authentication/context/AuthContext"
import app from "./authentication/fireBase";

export default function AppNav() {
    const { currentUser, logout, loggedIn } = useAuth()
    // const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        try {
            await logout()
            history.push("/login")
        } catch (error) {
            console.log(error);
            alert(error.message)
        }
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
            <Link to="/" style={{ textDecoration: "none" }}><Navbar.Brand as="div">My Lit Life</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>

                    {!currentUser
                        ? < Link to="/login" style={{ textDecoration: "none" }}><Nav.Link as="div">Login</Nav.Link></Link>
                        : <>
                            <Link to="/dashboard" style={{ textDecoration: "none" }}><Nav.Link as="div">Dashboard</Nav.Link></Link>
                            <Link to="/book-queue" style={{ textDecoration: "none" }}><Nav.Link as="div">Book Queue</Nav.Link></Link>
                            <Link to="/api/books" style={{ textDecoration: "none" }}><Nav.Link as="div">Completed Books</Nav.Link></Link>
                            <Link to="/" onClick={handleLogout} style={{ textDecoration: "none" }}><Nav.Link as="div">Logout</Nav.Link></Link>
                        </>

                    }
                    {/* onClick={handleLogout()} */}
                    {/* onClick={() => app.auth().signOut()} */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}