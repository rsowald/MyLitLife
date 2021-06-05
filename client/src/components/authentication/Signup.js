import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom"
import { useAuth } from './context/AuthContext'
import { Card, Form, Button, Alert, Spinner } from "react-bootstrap";
import "./auth.css";

export default function Signup(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const fNameRef = useRef()
    const lNameRef = useRef()
    const [passwordError, setPasswordError] = useState('')
    const [firebaseError, setFirebaseError] = useState('')
    const [loading, setLoading] = useState(false)
    // const { signup, currentUser } = useAuth()
    const { signup, updateUser } = useAuth()
    const [spin, setSpinner] = useState(false)
    const history = useHistory()

    async function handleSignUp(event) {
        event.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setPasswordError('Passwords do not match.')
        }
        if (passwordRef.current.value.length < 8) {
            return setPasswordError('Password must be at least 8 characters long.')
        }

        try {
            setSpinner(true)
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            await updateUser(fNameRef.current.value, lNameRef.current.value)
            setTimeout(
                history.push("/dashboard")
                , 3000)
        } catch (error) {
            console.log(error)
            setFirebaseError(error.message)
        }
        setLoading(false)
        setSpinner(false)
    }

    return (
        <Card className="signup-card">
            <Card.Body>
                <h3 className="text-center mb-4">Sign Up</h3>
                {/* {currentUser.email} */}
                {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                {firebaseError && <Alert variant="danger">{firebaseError}</Alert>}
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" id="fName">
                        <Form.Control name="firstName" type="name" ref={fNameRef} placeholder="First Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" id="lName">
                        <Form.Control name="lastName" type="name" ref={lNameRef} placeholder="Last Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" id="email">
                        <Form.Control name="email" type="email" ref={emailRef} placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" id="password">
                        <Form.Control name="password" type="password" ref={passwordRef} placeholder="Create Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" id="confirmPassword">
                        <Form.Control name="confirmPassword" type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required />
                    </Form.Group>

                    {!spin
                        ? < Button disabled={loading} className="mt-3 w-100" variant="secondary" type="submit">Sign Up</Button>
                        : <Spinner className="mt-3" animation="border" />
                    }
                </Form>
            </Card.Body>
            <Card.Footer className="text-center mt-2">
                <h5>
                    Have an account? <Button size="sm" className="ml-2" variant="secondary" onClick={() => props.onClick()}>Log in!</Button>
                </h5>
            </Card.Footer>
        </Card>
    );
};