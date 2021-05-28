import React from "react";
// react-bootstrap components
import {
  Card,
  Row,
  Col,
  Button,
  ButtonToolbar
} from "react-bootstrap";
import Title from './Title';
import "./dashboard.css";

export default function Dashboard() {
  // const bookGoals = useRef();

  return (
    <>
      <Title />
      <div className="container">
        <Row>
          <Col md="4">
            <Card className="card-stats" style={{ backgroundColor: "#f7d065" }}>
              <Card.Body>
                <Row>
                  <Col xs="2">
                    <div className="icon-big text-left icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="10">
                    <div className="numbers">
                      {/* {{ useRef }} */}
                      <p className="card-category">User Book Chart Here</p>
                      <hr></hr>
                      <Card.Title as="h2">Book Goals</Card.Title>
                      <hr></hr>
                      <Card.Body>
                        Goal:
                        <br></br>
                        <br></br>
                        <br></br>
                        <hr></hr>
                        Currently Reading:
                    </Card.Body>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  <ButtonToolbar className="mt-3 justify-content-between" aria-label="Toolbar with Button groups">
                    <Button variant="secondary" type="submit">Update</Button>
                  </ButtonToolbar>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            Insert Quote Here
        </Col>
          <Col md="4">
            <Card className="card-queue" style={{ backgroundColor: "#f7d065" }}>
              <Card.Body>
                <Row>
                  <Col xs="2">
                    <div className="icon-big text-left icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="10">
                    <div className="numbers">
                      {/* {{ useRef }} */}
                      <hr></hr>
                      <Card.Title as="h2">Book Queue</Card.Title>
                      <hr></hr>
                      <Card.Body>
                        <ul>
                          <li>Book 1</li>
                          <li>Book 2</li>
                          <li>Book 3</li>
                          <li>Book 4</li>
                          <li>Book 5</li>
                        </ul>
                      </Card.Body>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <ButtonToolbar className="mt-3 justify-content-between" aria-label="Toolbar with Button groups">
                    <Button variant="secondary" type="submit">Find Books</Button>
                  </ButtonToolbar>
                </div>
              </Card.Footer>
            </Card>
            <Row>
              <Row>
                <br></br>
              </Row>
              <Col md="12">
                <Card className="card-completed-form" style={{ backgroundColor: "#f7d065" }}>
                  <Card.Body>
                    <Row>
                      <Col xs="2">
                        <div className="icon-big text-left icon-warning">
                          <i className="nc-icon nc-chart text-warning"></i>
                        </div>
                      </Col>
                      <Col xs="10">
                        <div className="numbers">
                          {/* {{ useRef }} */}
                          <p className="card-category">User Book Chart Here</p>
                          <hr></hr>
                          <Card.Title as="h2">Completed Book Form</Card.Title>
                          <hr></hr>
                          <Card.Body>
                            <h3 className="text-center mb-4">Sign Up</h3>
                            {/* {currentUser.email} */}
                            {/* {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                            {firebaseError && <Alert variant="danger">{firebaseError}</Alert>}
                            <Form onSubmit={handleAddedBook}>
                                <Form.Group className="mb-3" id="title">
                                    <Form.Label >Title</Form.Label>
                                    <Form.Control name="title" type="name" ref={titleRef} placeholder="Book Title" required />
                                </Form.Group>
                                <Form.Group className="mb-3" id="author">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control name="author" type="name" ref={authorRef} placeholder="Last Name" required />
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
                                    ? < Button disabled={loading} className="mt-3 w-100" variant="success" type="submit">Add Book!</Button>
                                    : <Spinner className="mt-3" animation="border" variant="success" />
                                }
                            </Form> */}
                          </Card.Body>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <i className="fas fa-redo mr-1"></i>
                      <ButtonToolbar className="mt-3 justify-content-between" aria-label="Toolbar with Button groups">
                        <Button variant="secondary" type="submit">Update</Button>
                      </ButtonToolbar>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>

          </Col>
        </Row>
      </div>
    </>
  )
}