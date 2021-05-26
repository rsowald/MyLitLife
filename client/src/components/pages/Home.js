import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import Background from "../Background";

function Home() {
    return <>

        <Container fluid style={{ position: "relative" }}>
            <Background className="d-block" style={{ position: "absolute", zIndex: 0, height: "auto" }} />
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
                    <p>Please <Link to="/login">log in</Link> to get started.</p>
                </Col>
            </Row>

        </Container >
    </>
}

export default Home;