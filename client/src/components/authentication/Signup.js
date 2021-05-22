import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./Base";
import { Container, Row, Col, Card, Form, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

const Signup = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        // const { email, password, confirmPassword } = event.target.elements;
        // console.log(email.value, password.value, confirmPassword.value)

        const { firstName, lastName, email, password, confirmPassword } = event.target.elements;
        console.log(email.value, password.value)
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(firstName.value, lastName.value, email.value, password.value, confirmPassword.value);
            history.push("/dashboard");
        } catch (error) {
            alert(error);
        }
    }, [history])

    return (
        <Container className="my-5">

            <Row className="justify-content-md-center">
                <Col lg={6} md={8} sm={12}>
                    <Card>
                        <Card.Body>
                            <h3 className="text-center mb-4">Sign Up</h3>
                            <Form onSubmit={handleSignUp}>
                                <Form.Group id="email">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control name="firstName" type="name" placeholder="First Name" required />
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control name="lastName" type="name" placeholder="Last Name" required />
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Email" required />
                                    <Form.Group id="password" />
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Minimum 8 characters." required />
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" required />
                                </Form.Group>
                                <Button className="mt-2" variant="success" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};


export default withRouter(Signup);