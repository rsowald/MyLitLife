import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./Base.js";
import { AuthContext } from "./Auth.js";
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth";
import { Container, Row, Col, Card, Form, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/dashboard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />
  }

  return (
    <Container className="my-5">

      <Row className="justify-content-md-center">
        <Col lg={6} md={8} sm={12}>
          <Card>
            <Card.Body>
              <h3 className="text-center mb-4">Login</h3>
              <Form onSubmit={handleLogin}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" type="email" placeholder="Email" required />
                  <Form.Group id="password" />
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Button className="mt-3 w-100" variant="primary" type="submit">Login</Button>{' '}
              </Form>
              {/* <h5>Don't have an account, yet?</h5> */}
              {/* <p><Link to="/signup">Signup</Link> to get started.</p> */}

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
export default withRouter(Login);
