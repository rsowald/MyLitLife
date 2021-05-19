import React from "react";
<<<<<<< Updated upstream
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
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
                <Col size="md-8" className="text-center" style={{ backgroundColor: "gainsboro", borderRadius: "5px" }}>
                    <h1>Welcome to My Lit Life:</h1>
                    <h2>your personal literary goal tracker.</h2>
                    <p>Please <Link to="/login">log in</Link> to get started.</p>
                </Col>
            </Row>
        </Container >
    )
}
=======
import app from "./base";

function Home() {
    return (
        <>
        <h1>Home</h1>
        <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </>
    );
};
>>>>>>> Stashed changes

export default Home;