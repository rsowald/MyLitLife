import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from "./authentication/context/AuthContext";

export default function AppNav() {
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        try {
            await logout()
            history.push("/")
        } catch (error) {
            console.log(error);
            alert(error.message)
        }
    }

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
            <Link to="/dashboard" style={{ textDecoration: "none" }}><Navbar.Brand as="div">My Lit Life</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    {!currentUser
                        ? <></>
                        : <>
                            <Link to="/dashboard" style={{ textDecoration: "none" }}><Nav.Link as="div">Dashboard</Nav.Link></Link>
                            <Link to="/book-queue" style={{ textDecoration: "none" }}><Nav.Link as="div">Book Queue</Nav.Link></Link>
                            <Link to="/completed" style={{ textDecoration: "none" }}><Nav.Link as="div">Completed Books</Nav.Link></Link>
                            <Link to="/" onClick={handleLogout} style={{ textDecoration: "none" }}><Nav.Link as="div">Logout</Nav.Link></Link>
                        </>

                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
