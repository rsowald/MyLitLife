import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import app from "../authentication/Base";

function Dashboard() {
    return (
        <>
            <Container className="d-flex align-items-center justify-content-center"
                fluid style={{
                    backgroundImage: `url(./images/background.jpg)`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: '100vw',
                    height: '100vh'
                }}>
                <Row>
                    <Col md={3} className="text-center" style={{ backgroundColor: "gainsboro", borderRadius: "5px" }}>
                        
                       
                            <h1>Hello World</h1>
                       

                    </Col>
                    <Col md={6}>
                        <h1>Hello World</h1>
                    </Col>
                    <Col md={3}>
                        <h1>Hello World</h1>
                    </Col>
                </Row>

            </Container >
        </>
    );
};

export default Dashboard;