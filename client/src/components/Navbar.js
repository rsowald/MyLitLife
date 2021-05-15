import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

function AppNav() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="space">
            <Link to="/"><Navbar.Brand as="div">My Lit Life</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/book-queue">Book Queue</Link>
                    <Link to="/api/books">Completed Books</Link>
                    <Link to="/login">Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNav;