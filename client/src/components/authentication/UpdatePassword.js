import React, { useRef, useState } from "react"
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "./context/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword } = useAuth()
    const [loading, setLoading] = useState(false)
    const [firebaseError, setFirebaseError] = useState("")
    const [matchError, setMatchError] = useState("")
    const history = useHistory()

    async function handleUpdatePassword(event) {
        event.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setMatchError("Passwords do not match")
        }

        try {
            setLoading(true)
            if (passwordRef.current.value) {
                await updatePassword(passwordRef.current.value)
            }
            history.push("/")
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
                            <h3 className="text-center mb-4">Update password</h3>
                            {firebaseError && <Alert variant="warning">{firebaseError}</Alert>}
                            {matchError && <Alert variant="warning">{matchError}</Alert>}
                            <Form onSubmit={handleUpdatePassword}>
                                <Form.Group id="email">
                                    <Form.Label >Email</Form.Label>
                                    <Form.Control name="email" type="email" ref={emailRef} required defaultValue={currentUser.email} disabled />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control name="password" type="password" ref={passwordRef} placeholder="Minimum 8 characters." required />
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control name="confirmPassword" type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required />
                                </Form.Group>
                                <Button disabled={loading} className="mt-3 w-100" variant="success" type="submit">Update Password</Button>{' '}
                            </Form>
                            <div className="text-center mt-3">
                                <Link to="/">Cancel</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
