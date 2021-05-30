import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "react-image-gallery/styles/css/image-gallery.css";
import Background from "../Background";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import SidePanel from "../SidePanel";

function Home() {
    const location = useLocation();
    const { defaultShowLogin, defaultShowSignup } = location.state || {};
    const [showLogin, setShowLogin] = useState(defaultShowLogin);
    const [showSignup, setShowSignup] = useState(defaultShowSignup);

    return (
        <Container fluid style={{ position: "relative" }}>

            <Row>
                <Col size="md-8" className="d-inline text-center"
                    style={{
                        backgroundColor: "rgba(247, 190, 2, .8)",
                        borderRadius: "5px",
                        position: "absolute",
                        zIndex: 1,
                        left: "25%",
                        top: "20%",
                        width: "50%"
                    }}>
                    <h1>Welcome to My Lit Life:</h1>
                    <h2>your personal literary goal tracker.</h2>
                    <p>Please <Button variant="danger" onClick={() => setShowLogin(true)}>login</Button> to get started.</p>
                </Col>
            </Row>
            <Background style={{ position: "absolute", zIndex: 0 }} />
            <SidePanel isOpen={showLogin || showSignup} onClose={() => { setShowLogin(false); setShowSignup(false); }}>
                {!showSignup ?
                    <Login onClick={() => setShowSignup(true)} /> :
                    <Signup onClick={() => setShowSignup(false)} />
                }
            </SidePanel>


        </Container >
    );
}

export default Home;