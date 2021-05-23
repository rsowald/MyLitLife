import React, { useRef, useCallback, useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom"
import app from "./Base";
import { Container, Row, Col, Card, Form, Button, ButtonGroup, ButtonToolbar, Alert } from "react-bootstrap";

const Signup = ({ history }) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [passwordError, setPasswordError] = useState('')
    const [firebaseError, setFirebaseError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSignUp = useCallback(async event => {
        event.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setPasswordError('Passwords do not match')
        } else if (passwordRef.current.value.length < 8) {
            return setPasswordError('Passwords required to be at least 8 characters long')
        }
        const { firstName, lastName, email, password, confirmPassword } = event.target.elements;
        console.log(firstName.value, lastName.value, email.value, password.value, confirmPassword.value)
        try {
            setLoading(true)
            await app
                .auth()
                // .createUserWithEmailAndPassword(firstName.value, lastName.value, email.value, password.value, confirmPassword.value);
                .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
            history.push("/dashboard");
        } catch (error) {
            console.log(error)
            // alert(error);
            setFirebaseError(error.message)
        }
        setLoading(false)
    }, [history])

    return (
        <Container className="my-5">

            <Row className="justify-content-md-center">
                <Col lg={6} md={8} sm={12}>
                    <Card>
                        <Card.Body>
                            <h3 className="text-center mb-4">Sign Up</h3>
                            {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                            {firebaseError && <Alert variant="danger">{firebaseError}</Alert>}

                            <Form onSubmit={handleSignUp}>

                                <Form.Label>First Name</Form.Label>
                                <Form.Control name="firstName" type="name" ref={emailRef} placeholder="First Name" required />
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control name="lastName" type="name" placeholder="Last Name" required />
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Email" required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" ref={passwordRef} placeholder="Minimum 8 characters." required />
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control name="confirmPassword" type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required />
                                </Form.Group>
                                <Button disabled={loading} className="mt-3 w-100" variant="success" type="submit">Sign Up</Button>

                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="text-center mt-2">
                        <h5>
                            Have an account, <Link to="/login">Log in!</Link>
                        </h5>
                    </div>
                </Col>
            </Row >
        </Container >
    );
};


export default withRouter(Signup);