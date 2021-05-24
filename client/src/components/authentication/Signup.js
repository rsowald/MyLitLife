import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom"
import { useAuth } from './context/AuthContext'
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [passwordError, setPasswordError] = useState('')
    const [firebaseError, setFirebaseError] = useState('')
    const [loading, setLoading] = useState(false)
    // const { signup, currentUser } = useAuth()
    const { signup } = useAuth()
    const history = useHistory()

    async function handleSignUp(event) {
        event.preventDefault();
        const { firstName, lastName, email, password, confirmPassword } = event.target.elements;
        console.log("all values: ", firstName.value, lastName.value, email.value, password.value, confirmPassword.value)
        console.log("values to create user: ", emailRef.value, passwordRef.value)

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setPasswordError('Passwords do not match')
        } else if (passwordRef.current.value.length < 8) {
            return setPasswordError('Password required to be at least 8 characters long')
        }

        try {
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard");
        } catch (error) {
            console.log(error)
            setFirebaseError(error.message)
        }
        setLoading(false)
    }

    return (
        <Container className="my-5">
            <Row className="justify-content-md-center">
                <Col lg={6} md={8} sm={12}>
                    <Card>
                        <Card.Body>
                            <h3 className="text-center mb-4">Sign Up</h3>
                            {/* {currentUser.email} */}
                            {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                            {firebaseError && <Alert variant="danger">{firebaseError}</Alert>}
                            <Form onSubmit={handleSignUp}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name="firstName" type="name" placeholder="First Name" required />
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control name="lastName" type="name" placeholder="Last Name" required />
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" type="email" ref={emailRef} placeholder="Email" required />
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