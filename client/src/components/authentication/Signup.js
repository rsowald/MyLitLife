import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom"
import { useAuth } from './context/AuthContext'
import { Card, Form, Button, Alert, Spinner } from "react-bootstrap";

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
        // const { firstName, lastName, email, password, confirmPassword } = event.target.elements;
        // console.log("all values: ", firstName.value, lastName.value, email.value, password.value, confirmPassword.value)
        // console.log("values to create user: ", emailRef.current.value, passwordRef.current.value)

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
        <Card>
            <Card.Body>
                <h3 className="text-center mb-4">Sign Up</h3>
                {/* {currentUser.email} */}
                {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                {firebaseError && <Alert variant="danger">{firebaseError}</Alert>}
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" id="fName">
                        <Form.Label >First Name</Form.Label>
                        <Form.Control name="firstName" type="name" ref={fNameRef} placeholder="First Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" id="lName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="lastName" type="name" ref={lNameRef} placeholder="Last Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" ref={emailRef} placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" ref={passwordRef} placeholder="Minimum 8 characters." required />
                    </Form.Group>
                    <Form.Group className="mb-3" id="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name="confirmPassword" type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required />
                    </Form.Group>

                    {!spin
                        ? < Button disabled={loading} className="mt-3 w-100" variant="success" type="submit">Sign Up</Button>
                        : <Spinner className="mt-3" animation="border" variant="success" />
                    }
                </Form>
            </Card.Body>
            <Card.Footer className="text-center mt-2">
                <h5>
                    Have an account? <Button size="sm" className="ml-2" onClick={() => props.onClick()}>Log in!</Button>
                </h5>
            </Card.Footer>
        </Card>
    );
};