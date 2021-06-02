import React from "react";
// react-bootstrap components
import { Container, Card, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import Title from '../Title';
import "./dashboard.css";
import Glossary from "../Glossary";
import DashboardQuoteCol from "../DashboardQuoteCol";
import BestSellers from '../BestSellers';
import BookForm from '../CompletedBookForm';

export default function Dashboard() {
  // const bookGoals = useRef();

  return (
    <>
      <Title />
      <Container>
        <Row className="d-flex justify-content-center mb-3">
          <Col>
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
        </Row>
        <Row>
          <Col md="4">
            <Glossary />

          </Col>
          <Col>
            <DashboardQuoteCol />
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
                      <Col lg="2">
                        <div className="icon-big text-left icon-warning">
                          <i className="nc-icon nc-chart text-warning"></i>
                        </div>
                      </Col>
                      <Col lg="10">
                        <div className="numbers">
                          <Card.Title as="h2">Completed Book Form</Card.Title>
                          <Card.Body>
                            <h6 className="text-center mb-9">Add Your Book Below!</h6>
                            <hr></hr>
                            <BookForm />
                          </Card.Body>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Col>
        </Row>
        <BestSellers />
      </Container>
    </>
  )
}