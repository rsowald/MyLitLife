import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

function NoMatch() {
    return (
        <Container fluid>
            <Row className="d-flex align-items-center">
                <Col size="md-12">
                    <Jumbotron align="center" style={{ padding: "50px" }}>
                        <h1>404 Page Not Found</h1>
                        <a href="/">Try going back to the home page</a>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default NoMatch;