import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "react-image-gallery/styles/css/image-gallery.css";
import Background from "../Background";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import SidePanel from "../SidePanel";
import useWindowSize from "../../utils/windowWidth";

function Home() {
    const location = useLocation();
    const { defaultShowLogin, defaultShowSignup } = location.state || {};
    const [showLogin, setShowLogin] = useState(defaultShowLogin);
    const [showSignup, setShowSignup] = useState(defaultShowSignup);
    const [portrait, setPortrait] = useState(false);
    const windowSize = useWindowSize();

    useEffect(() => {
        windowSize > 480 ? setPortrait(false) : setPortrait(true)
    }, [windowSize]);

    return (
        <Container fluid style={{ position: "relative" }}>

            <Row>
                <Col size="md-8" className="d-inline text-center"
                    style={portrait ? {
                        backgroundColor: "rgba(247, 190, 2, .8)",
                        borderRadius: "5px",
                        position: "absolute",
                        zIndex: 1,
                        left: "13%",
                        top: "2%",
                        width: "75%"
                    } : {
                        backgroundColor: "rgba(247, 190, 2, .8)",
                        borderRadius: "5px",
                        position: "absolute",
                        zIndex: 1,
                        left: "25%",
                        top: "50%",
                        width: "35%"
                    }}>
                    <h2>Welcome to your personal literary goal tracker.</h2>
                    <p>Please <Button variant="danger" onClick={() => setShowLogin(true)}><i className="fas fa-unlock-alt" />  log in</Button> to get started.</p>
                </Col>
            </Row>
            <Background style={{ width: "100vw", height: "100vh", position: "absolute", zIndex: 0 }} />
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