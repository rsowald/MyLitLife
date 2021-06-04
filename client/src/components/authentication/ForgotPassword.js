import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import "./auth.css";

export default function ResetPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [firebaseError, setFirebaseError] = useState('');
    const [loading, setLoading] = useState(false);
    const [instructions, setInstruction] = useState("");

    async function handleResetPassword(event) {
        event.preventDefault();

        try {
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setInstruction('Check your email for instructions')
        } catch (error) {
            console.log(error)
            setFirebaseError(error.message)
        }
        setLoading(false)
        emailRef.current.value = "";
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-md-center">
                <Col lg={6} md={8} sm={12}>
                    <Card className="forgot-pass-card">
                        <Card.Body>
                            <h3 className="text-center mb-4">Forgot password</h3>
                            {instructions && <Alert variant="success">{instructions}</Alert>}
                            {firebaseError && <Alert variant="warning">{firebaseError}</Alert>}

                            <Form onSubmit={handleResetPassword}>
                                <Form.Group id="email">
                                    <Form.Control name="email" type="email" ref={emailRef} placeholder="Email Address" required />
                                </Form.Group>
                                <Button disabled={loading} className="mt-3 w-100" variant="secondary" type="submit">Reset Password</Button>{' '}
                            </Form>
                            <div className="text-center mt-3">
                                <Link to={{ pathname: "/", state: { defaultShowLogin: true } }}>Back to Login</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="text-center mt-2">
                        <h5>Don't have an account, yet?
              <Link to={{ pathname: "/", state: { defaultShowSignup: true } }}> Sign Up!</Link>
                        </h5>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}