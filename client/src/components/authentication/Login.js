import React, { useRef, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './context/AuthContext'
// import app from './fireBase'
// import { provider } from './authProvider'
import { provider } from './fireBase'

import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, googleSignInPopup } = useAuth()
  const [firebaseError, setFirebaseError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleLogin(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard");
    } catch (error) {
      console.log(error)
      setFirebaseError(error.message)
    }
    setLoading(false)
  };

  async function googleSignin(provider) {
    try {
      await googleSignInPopup(provider)
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      setFirebaseError(error.message)
    }

  }
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col lg={6} md={8} sm={12}>
          <Card>
            <Card.Body>
              <h3 className="text-center mb-4">Login</h3>
              {firebaseError && <Alert variant="danger">{firebaseError}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" type="email" ref={emailRef} placeholder="Email" required />
                  <Form.Group id="password" />
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>
                <Button className="mt-3 w-100" variant="primary" type="submit">Login</Button>
              </Form>
              <Button className="mt-3 w-100" variant="primary" type="submit" onClick={() => { googleSignin(provider) }}>Login with Google</Button>

              <div className="text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="text-center mt-2">
            <h5>Don't have an account, yet?
              <Link to="/signup"> Sign Up!</Link>
            </h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
}