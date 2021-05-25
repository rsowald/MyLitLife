import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import Background from "../Background";

function Home() {
    return (
        <Background>
            <Container className="d-flex align-items-center justify-content-center">
                <Row>
                    <Col size="md-8" className="text-center" style={{ backgroundColor: "gainsboro", borderRadius: "5px" }}>
                        <h1>Welcome to My Lit Life:</h1>
                        <h2>your personal literary goal tracker.</h2>
                        <p>Please <Link to="/login">log in</Link> to get started.</p>
                    </Col>
                </Row>
            </Container >
        </Background>
    )
}

export default Home;