import React, { useCallback, useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import app from "./Base";


const Signup = ({ history }) => {
    const handleSignUp = useCallback{async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
            history.pushState("/");
        } catch (error) {
            alert(error);
                }
    }, [history])}

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    return (
        <>
        <Card>
            <Card.Body>
                <h3 className="text-center mb-4">Sign Up</h3>
                // FIgure out why handleSignUp isn't working!
                <Form onSumbmit={handleSignUp}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} placeholder="Email" required />
                        <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="email" ref={passwordRef} placeholder="Min 8 characters" required />
                        <Form.Group id="confirm-password">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="confirm-password" ref={passwordConfirmRef} placeholder="Confirm Password" required />
                    </Form.Group>
                    <button type="submit">Signup</button>
                </Form>
            </Card.Body>
        </Card>
    )
};

export default withRouter(SignUp);