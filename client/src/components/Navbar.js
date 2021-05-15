import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

function AppNav() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ marginBottom: "20px", paddingLeft: "1rem", paddingRight: "1rem" }}>
            <Link to="/" style={{ textDecoration: "none" }}><Navbar.Brand as="div">My Lit Life</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Link to="/dashboard" style={{ textDecoration: "none" }}><Nav.Link as="div">Dashboard</Nav.Link></Link>
                    <Link to="/book-queue" style={{ textDecoration: "none" }}><Nav.Link as="div">Book Queue</Nav.Link></Link>
                    <Link to="/api/books" style={{ textDecoration: "none" }}><Nav.Link as="div">Completed Books</Nav.Link></Link>
                    <Link to="/login" style={{ textDecoration: "none" }}><Nav.Link as="div">Login</Nav.Link></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNav;